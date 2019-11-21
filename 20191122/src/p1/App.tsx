import React, {useState} from 'react';
import '../css/App.css';
import {Constants} from "../Constants";

const apiKey = Constants.CARSENSOR_API_KEY;
const fukuokaPref = 40;

const carsInitValue: any[] = [];
/**
 * 初期状態。全く分離されていない状態。
 */
const App: React.FC = () => {
  const [cars, setState] = useState(carsInitValue);
  return <div className="App">
    <header className="App-header">
      <button className="search-button" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(`https://webservice.recruit.co.jp/carsensor/usedcar/v1/?key=${apiKey}&pref=${fukuokaPref}&format=json`)
          .then(response => {
            if (response.ok) {
              return response.json();
            } else {
              throw new Error('Network response was not ok.');
            }
          })
          .then((json) => {
            console.log("API response", json);
            setState(json.results.usedcar);
          });
      }}>検索する
      </button>
      {cars.length === 0 ? <></> : <table className="car-list">
        <thead>
        <tr>
          <th>車種</th>
          <th>写真</th>
        </tr>
        </thead>
        <tbody>
        {cars.map((car: any) => <tr key={car.id}>
            <td>{[car.brand.name, car.brand.code, car.grade].join(' ')}</td>
            <td>
              <img style={{maxWidth: 150, maxHeight: 120}} src={car.photo.main.l}/>
            </td>
          </tr>
        )}
        </tbody>
      </table>}

    </header>
  </div>;
};

export default App;
