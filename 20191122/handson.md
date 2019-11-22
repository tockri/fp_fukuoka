# こわくない関数型プログラミング勉強会@福岡 #3

## jsで副作用を分離するハンズオン
といいつつ、TypeScriptを使います。IntelliJとかで補完が効いて楽なので。

# 0. yarnをインストール

システムにyarnがインストールされていない場合は[公式サイトの「インストール」](https://yarnpkg.com/lang/ja/docs/install/#mac-stable)を見てインストールしてください。

# 1. このプロジェクトをclone
```
git clone https://github.com/tockri/fp_fukuoka.git
```
レポジトリ中の `20191122` が今回の**プロジェクトディレクトリ**です。

好きな場所にコピーするなり移動するなりしてください。もちろんそのまま移動せず使ってもいいです。

# 2. 開発を始める準備
## 作業用ディレクトリをコピー
```sh
cd src
cp -r p1 work
```
## yarn
プロジェクトディレクトリで
```
yarn
```
を実行。以上です。

# 3. とりあえず実行してみる
```
yarn start
```
1. 開発用サーバーが起動
2. ブラウザで http://localhost:3000 が開く
3. 中古車一覧が表示される

これ以上なんの機能もありません。表示して終わり。

# 4. 今日編集するソースコード

[src/work/App.tsx](https://github.com/tockri/fp_fukuoka/blob/master/20191122/src/p1/App.tsx) 

## 雑な解説
React-hooksを使ったごく簡単なサンプルです。

`useState`や`useEffect`については、[react-hooks 入門でググれば](https://www.google.com/search?q=react-hooks+%E5%85%A5%E9%96%80)たくさん書かれているのでここでは割愛。

#### (1) `setState`は関数
```
const [state, setState] = useState(initialState);
```
`useState`の返り値は配列で、[0]を`state`に、[1]を`setState`に束縛してます。

実は`setState`は関数で、その型は、
```tsx
React.Dispatch<React.SetStateAction<AppState>>
```
です。関数に見えないですね。Reactの型定義ファイルにはこう書かれています。（IntelliJ便利）
```tsx
type SetStateAction<S> = S | ((prevState: S) => S);
type Dispatch<A> = (value: A) => void;
```
`SetStateAction<S>`型の変数には、`S`という値か`(prevState: S) => S`という関数のどちらかが入ります（えー）。で、今日のところは関数を入れないので単に`S`と考えます（えー）。

`Dispatch<A>`のほうはシンプルです。`A`型の引数をとって返り値ナシ（void）な関数です。

つまり、`setState`の型はこうなります。
```tsx
(value: AppState) => void
```

## (2) 画面全体の状態`AppState`
```tsx
/**
 * この画面全体のState
 */
type AppState = {
  // 検索結果 | undefined
  searchResult?: CarsensorUsedCarResult
};
```
`App`というコンポーネントの状態なので`AppState`。

検索結果を表示するだけのコンポーネントなので、`AppState`のメンバーは`searchResult?:CarsensorUsedCarResult`一つだけ。（`?`は `CarsensorUsedCarResult | undefined`と等価）

唯一のメンバーが`?`つきで宣言されてるので、`{}`も`AppState`型の変数に代入できる。
```tsx
/**
 * 初期状態：検索結果なし
 */
const initialState: AppState = {};
```

で、「検索結果`CarsensorUsedCarResult`を得られたら`AppState`オブジェクトをつくって`setState()`に渡す」という処理をする必要があるので、便利関数を用意。
```tsx
/**
 * 検索結果からAppStateを生成する関数
 */
const AppState: (result: CarsensorUsedCarResult) => AppState =
  result => ({searchResult: result});
```

### (3) APIのレスポンスJSONを格納する`CarsensorUsedCarResult`型

カーセンサーAPIの仕様 https://webservice.recruit.co.jp/carsensor/reference.html#a1to をもとに、ちまちま型定義ファイルを自作したのが[carsensor.ts](https://github.com/tockri/fp_fukuoka/blob/master/20191122/src/types/carsensor.ts)です。

返ってきたJSONを単に`CarsensorUsedCarResult`型にキャストするだけでエディタ補完が効いて便利！

# 5. 問題点：APIレスポンス型への依存が多い

中古車一覧表示コンポーネント`ResultHead`、`CarList`および`CarView`ですが、今後機能を拡張していくことを考えると、これらのコンポーネント全部が`CarsensorUsedCarResult`型にべったり依存しているのは嬉しくないです。

こういうのとか
```tsx
const results = props.result.searchResult!.results;

return <div>
  {results.results_available} 件が見つかりました。
  （{results.results_start} 〜 {results.results_start + parseInt(results.results_returned) - 1}件を表示）
</div>
```
こういうのみたいな
```tsx
{[car.brand.name, car.model, car.grade].join(' ')}
```
「表示のための前処理」がViewの中に増えていくからです。

APIが返した件数を表す`results_returned`がまさかのstring型なので`parseInt`しなきゃいけないとか。また、将来APIの仕様変更があったときの変更範囲がどんどん広がっていきます。

ということで、アプリケーションの表示に必要な型を自分で定義して、コンポーネントはその型に依存するようにしましょう。

# 6. 表示用の型を定義

ここから`work/App.tsx`を編集してきます。

```tsx
/**
 * この画面全体のState
 */
type AppState = {
  // 検索結果 | undefined
  searchResult?: CarsensorUsedCarResult
};
```
を削除して、以下のコードを書き込んでください。
```tsx
/**
 * 車一台分の情報
 */
export type CarInfo = {
  id: string
  displayName: string
  color: string
  description: string
  url: string
  imageUrl: string
};
/**
 * 車リストの情報
 */
export type CarInfoList = {
  totalCount: number  // 検索ヒット件数
  startIndex: number  // 表示開始番号
  lastIndex: number   // 表示終了番号
  cars: CarInfo[]
};
/**
 * この画面全体のState
 */
export type AppState = {
  carInfoList?: CarInfoList
};
```
コンパイルエラーになるけど気にしない。

