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
「検索する」ボタンが表示されていればOK。

----
ここまで、ハンズオン開始前に準備してもらえるとスムーズです。（その場でやってもいいです）

----

# 4. 最初のソースコード

[src/p1/App.tsx](https://github.com/tockri/fp_fukuoka/blob/master/20191122/src/p1/App.tsx) が最初のコードです。これを分割していきましょう。

### 雑な解説


# 5. CarListコンポーネントを作成する

まず、自動車一覧を表示する部分は意味を持ったかたまりなので別コンポーネントにするのが良さそうです。

### (1) 原型をつくる 
8行目辺りの空いてる場所に、コンポーネントの原型を作ります。
```tsx
const CarList = (props:{cars:any[]}) => {
  const cars = props.cars;
  return ();
}
```
### (2) App の中身を移植
`App`中の
```tsx
{cars.length === 0 ? <></> : <table className="car-list">
 :
 :
</table>}
```
の`<table>`〜`</table>`を切り取って`CarList`のreturn文に移動するとこうなります。
```tsx
const CarList = (props:{cars:any[]}) => {
  const cars = props.cars;
  return (<table className="car-list">
    :
    :
  </table>);
}
```
もとの`App`側の`<table>`がなくなった部分に今作った`<CarList>`をこのように挿入します。
```tsx
{cars.length === 0 ? <></> : <CarList cars={cars} />}
```
IntelliJなど補完が効くエディタでは`<CarList c`あたりまで打ち込むと`cars={}`が補完されます。これは`CarList`コンポーネントの引数`props`に`{cars:any[]}`という型が指定してあるからです。型、べんり。

<small>※ とても型に見えないかもしれませんが、TypeScriptでは型に名前をつけず、直接「any[]型のcarsというプロパティがある」型をこう書けます。</small>

# 6. CarInfoコンポーネントを作成する
ブラウザ上で「検索する」ボタンをクリックして無事に動くことを確認したら、さらに分割しましょう。

`CarList`の`<tr>`タグ一つぶんを`Car`コンポーネントに切り分けます。

### (1) 原型をつくる
また空いてるところに原型をつくります。

```tsx
const CarInfo = (props:{car:any}) => {
  const car = props.car;
  return ();
}
```

### (2) CarListの中身を移植する

`CarList`中の
```tsx
{cars.map((car: any) => <tr>
 :
 :
</tr>)}
```
となっているところ、また`<tr>`〜`</tr>`を切り取って`CarInfo`に移動すると`CarInfo`はこうなります。
```tsx
const CarInfo = (props:{car:any}) => {
  const car = props.car;
  return (<tr key={car.id}>
    :
    :
  </tr>);
};
```
もとの`CarList`側の抜けてるところには同様にして、`<CarInfo>`を埋め込みます。
```tsx
{cars.map((car: any) => <CarInfo car={car}/>)}
```

# 7. イベント部分を別関数にする
さすがに`<button onClick={}>`の中にこんな長いコードを書くことは普通ないと思います。

別の関数をつくって移動しましょう。

### (1) 原型をつくる
空いているところに
```tsx
const searchCars = (callback: (cars:any[]) => void) => {
  
};
```
と関数の原型を用意します。

引数`callback`の型の記述がエライことになってますが、「`any[]`型の引数`cars`をとって返り値の型が`void`である関数」という意味です。見づらかったら名前をつけることもできます。
```tsx
type CarsCallback = (cars:any[]) => void;

const searchCars = (callback: CarsCallback) => {

};
```
でも同じです。

### (2) Appから移植する
```tsx
fetch(`https://....`)
  .then(response => {
    :
    :
  }).then(json => {
    :
    :
  });
```
の部分をまるごと切り取って`searchCars`の中に入れます。

`setState`が定義されていないというエラーが出るので、`setState`を`callback`に書き換えます。
最後のあたりはこうなります。
```
.then((json) => {
  console.log("API response", json);
  callback(json.results.usedcar);
});
```

`App`側の切り取られた部分に`searchCars`呼び出しを入れます。`<button>`タグ全体はこうなります。
```tsx
<button className="search-button" onClick={(e) => {
  e.preventDefault();
  e.stopPropagation();
  searchCars(setState)
}}>検索する
</button>
```
