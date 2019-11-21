# こわくない関数型プログラミング勉強会@福岡 #3

## jsで副作用を分離するハンズオン
といいつつ、TypeScriptを使います。IntelliJとかで補完が効いて楽なので。

# 1. このプロジェクトをダウンロードする
```
git clone https://github.com/tockri/fp_fukuoka.git
```
レポジトリ中の `20191122` が今回のプロジェクトディレクトリです。
好きな場所にコピーするなり移動するなりしてください。もちろんそのまま移動せず使ってもいいです。

# 2. 開発を始める準備
プロジェクトディレクトリにて、
```
yarn
```
を実行します。

yarnがインストールされていない場合は[公式サイトの「インストール」](https://yarnpkg.com/lang/ja/docs/install/#mac-stable)を見てインストールしてください。

# 3. とりあえず実行してみる
```
yarn start
```
で、開発用サーバーが起動し、ブラウザで http://localhost:30000 が開きます。
中古車一覧が表示されていればOK。

----
ここまで、ハンズオン開始前に準備してもらえるとスムーズです。（その場でやってもいいです）

----

# 4. 最初のソースコード

[src/p1/App.tsx](https://github.com/tockri/fp_fukuoka/blob/master/20191122/src/p1/App.tsx) が最初のコードです。これをリファクタリングしていきましょう。

## 雑な解説
React-hooksを使ったごく簡単なサンプルです。

#### useState
```
const [state, setState] = useState(initialState);
```
`useState(初期状態)`


時間が短いので、

# 8. APIの型からアプリケーションの型に変換して使う

カーセンサーAPIの仕様は https://webservice.recruit.co.jp/carsensor/reference.html#a1to で公開されていますが、表示するコンポーネントを開発するときにいちいちAPIの仕様と突き合わせるのは嫌ですね。あと、このままではAPIの仕様変更があったときに変更範囲がどこまでになるかわかりません。

現状、画面表示に使うのは
* ブランド名
* 型番
* グレード
* 写真URL
