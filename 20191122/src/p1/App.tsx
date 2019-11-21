import React, {useState} from 'react';
import '../css/App.css';
import {Constants} from "../Constants";
import {SearchResult, UsedCar} from "../types/carsensor";

const apiKey = Constants.CARSENSOR_API_KEY;
const fukuokaPref = 40;

const initSearchResult: SearchResult = {};

/**
 * カーセンサーの中古車を検索して一覧表示する
 * 参考：カーセンサーAPI
 * https://webservice.recruit.co.jp/carsensor/reference.html#a1to
 */
const App = () => {
  const [result, setState] = useState(initSearchResult);
  return <div className="App">
    <header>
      {result.results
        ? <ResultHead result={result} callback={setState}/>
        : <SearchForm callback={setState} />
      }
    </header>
    <section>
      {result.results ? <CarList result={result}/> : <></>}
    </section>
  </div>;
};

/**
 * 検索するボタン
 * 初期状態。処理とデータとUIが全く分離されていない。
 */
const SearchForm = (props: { callback: React.Dispatch<SearchResult> }) => {
  const callback = props.callback;
  return <div>
    <button className="search-button" onClick={(e) => {
      e.preventDefault();
      e.stopPropagation();
      fetch(`https://webservice.recruit.co.jp/carsensor/usedcar/v1/?key=${apiKey}&pref=${fukuokaPref}&format=json`)
        .then(response => {
          if (response.ok) {
            return response.json() as SearchResult;
          } else {
            throw new Error('Network response was not ok.');
          }
        })
        .then((json) => {
          console.log("API response", json);
          callback(json);
        });
    }}>検索する
    </button>
  </div>
};

/**
 * 検索結果のヘッダ
 */
const ResultHead = (props: { result: SearchResult, callback: React.Dispatch<SearchResult> }) => {
  const results = props.result.results!;
  const callback = props.callback;
  return <div>
    {results.results_available} 件が見つかりました。
    （{results.results_start} 〜 {results.results_start + parseInt(results.results_returned) - 1}件を表示）
    <button onClick={(e) => callback({})}>戻る</button>
  </div>
};

/**
 * 中古車一覧表示
 */
const CarList = (props: { result: SearchResult }) => {
  const results = props.result.results!;
  return <table className="car-list">
    <thead>
    <tr>
      <th>車種</th>
      <th>写真</th>
    </tr>
    </thead>
    <tbody>
    {results.usedcar.map(car => <CarView car={car}/>)}
    </tbody>
  </table>
};

/**
 * 中古車一台分の表示
 */
const CarView = (props: { car: UsedCar }) => {
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
