import React, {useEffect, useState} from 'react';
import '../css/App.css';
import {Constants} from "../Constants";
import {CarsensorUsedCarResult, CarsensorUsedCar} from "../types/carsensor";

const apiKey = Constants.CARSENSOR_API_KEY;
const fukuokaPref = 40;


/**
 * この画面全体のState
 */
type AppState = {
  // 検索結果 | undefined
  searchResult?: CarsensorUsedCarResult
};
/**
 * 検索結果からAppStateを生成する関数
 */
const AppState: (result: CarsensorUsedCarResult) => AppState =
  result => ({searchResult: result});

/**
 * 初期状態：検索結果なし
 */
const initialState: AppState = {};

/**
 * 検索実行してレスポンスが返ってきたらコールバックを呼ぶ
 * 参考：カーセンサーAPI
 * https://webservice.recruit.co.jp/carsensor/reference.html#a1to
 */
const search = (callback: (result: CarsensorUsedCarResult) => void) => {
  fetch("https://webservice.recruit.co.jp/carsensor/usedcar/v1/" +
    `?key=${apiKey}&pref=${fukuokaPref}&format=json`)
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error('Network response was not ok.');
      }
    })
    .then((sr: CarsensorUsedCarResult) => { // 明示的に型を指定することでanyからキャスト
      console.log("API response", sr);
      callback(sr);
    });
};

/**
 * カーセンサーの中古車を検索して一覧表示する
 */
const App = () => {
  // react-hooks 。コンポーネントローカルの状態(AppState)を持つ。
  const [state, setState]: [AppState, React.Dispatch<React.SetStateAction<AppState>>] = useState(initialState);
  useEffect(() => {
    search(result => setState(AppState(result)));
  }, []);

  return <div className="App">
    {state.searchResult
      ? <section>
        <ResultHead result={state}/>
        <CarList cars={state.searchResult.results.usedcar}/>
      </section>
      : <></>}
  </div>;
};

/**
 * 検索結果のヘッダ
 */
const ResultHead = (props: { result: AppState }) => {
  const results = props.result.searchResult!.results;

  return <div>
    {results.results_available} 件が見つかりました。
    （{results.results_start} 〜 {results.results_start + parseInt(results.results_returned) - 1}件を表示）
  </div>
};

/**
 * 中古車一覧表示
 */
const CarList = (props: { cars: CarsensorUsedCar[] }) => {
  const cars = props.cars;
  return <table className="car-list">
    <thead>
    <tr>
      <th>物件</th>
      <th>写真</th>
    </tr>
    </thead>
    <tbody>
    {cars.map(car => <CarView car={car}/>)}
    </tbody>
  </table>
};

/**
 * 中古車一台分の表示
 */
const CarView = (props: { car: CarsensorUsedCar }) => {
  const car = props.car;
  return <tr key={car.id}>
    <td>
      <div>
        <a href={car.urls.pc} target="_blank">
          {[car.brand.name, car.model, car.grade].join(' ')}
        </a>
      </div>
      <div>{car.color}</div>
      <small>{car.desc}</small>
    </td>
    <td>
      <img className="car-image" src={car.photo.main.l}/>
    </td>
  </tr>;
};

export default App;
