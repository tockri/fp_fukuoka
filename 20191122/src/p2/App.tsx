import React, {useEffect, useState} from 'react';
import '../css/App.css';
import {Constants} from "../Constants";
import {CarsensorUsedCarResult, CarsensorUsedCar} from "../types/carsensor";

const apiKey = Constants.CARSENSOR_API_KEY;
const fukuokaPref = 40;

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
 * APIレスポンスからの変換
 */
export const CarInfo: (car: CarsensorUsedCar) => CarInfo =
  car => {
    return {
      id: car.id,
      displayName: [car.brand.name, car.model, car.grade].join(' '),
      color: car.color,
      description: car.desc,
      url: car.urls.pc,
      imageUrl: car.photo.main.l
    }
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
 * APIレスポンスからの変換
 */
export const CarInfoList: (result: CarsensorUsedCarResult) => CarInfoList =
  result => {
    const r = result.results;
    return {
      totalCount: r.results_available,
      startIndex: r.results_start,
      lastIndex: r.results_start + parseInt(r.results_returned) - 1,
      cars: r.usedcar.map(CarInfo)
    }
  };

/**
 * この画面全体のState
 */
export type AppState = {
  carInfoList?: CarInfoList
};
/**
 * 検索結果からAppStateを生成する関数
 */
export const AppState: (result: CarsensorUsedCarResult) => AppState =
  result => {
    console.log("CarsensorUsedCarResult", JSON.stringify(result, null, 2));
    const converted = CarInfoList(result);
    console.log("CarInfoList", JSON.stringify(converted, null, 2));
    return {carInfoList: converted};
  };

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
  const [state, setState] = useState(initialState);
  useEffect(() => {
    search(result => setState(AppState(result)));
  }, []);

  return <div className="App">
    {state.carInfoList
      ? <section>
        <ResultHead carInfoList={state.carInfoList}/>
        <CarList cars={state.carInfoList.cars}/>
      </section>
      : <></>}
  </div>;
};

/**
 * 検索結果のヘッダ
 */
const ResultHead = (props: { carInfoList: CarInfoList }) => {
  const carInfoList = props.carInfoList;

  return <div>
    {carInfoList.totalCount} 件が見つかりました。
    （{carInfoList.startIndex} 〜 {carInfoList.lastIndex}件を表示）
  </div>
};

/**
 * 中古車一覧表示
 */
const CarList = (props: { cars: CarInfo[] }) => {
  const cars = props.cars;
  return <table className="car-list">
    <thead>
    <tr>
      <th>物件</th>
      <th>写真</th>
    </tr>
    </thead>
    <tbody>
    {cars.map(car => <CarView car={car} key={car.id}/>)}
    </tbody>
  </table>
};

/**
 * 中古車一台分の表示
 */
const CarView = (props: { car: CarInfo }) => {
  const car = props.car;
  return <tr>
    <td>
      <div>
        <a href={car.url} target="_blank" rel="noopener noreferrer">
          {car.displayName}
        </a>
      </div>
      <div>{car.color}</div>
      <small>{car.description}</small>
    </td>
    <td>
      <img className="car-image" src={car.imageUrl} alt=""/>
    </td>
  </tr>;
};

export default App;
