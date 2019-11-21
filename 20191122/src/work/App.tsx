import React, {useState} from 'react';
import '../css/App.css';
import {Constants} from "../Constants";

const apiKey = Constants.CARSENSOR_API_KEY;
const fukuokaPref = 40;

const CarList = (props: { cars: any[] }) => {
  const cars = props.cars;
  return (<table className="car-list">
    <thead>
    <tr>
      <th>車種</th>
      <th>写真</th>
    </tr>
    </thead>
    <tbody>
    {cars.map((car: any) => <CarInfo car={car}/>)}
    </tbody>
  </table>);
};

const CarInfo = (props: { car: any }) => {
  const car = props.car;
  return (<tr key={car.id}>
    <td>{[car.brand.name, car.brand.code, car.grade].join(' ')}</td>
    <td>
      <img style={{maxWidth: 150, maxHeight: 120}} src={car.photo.main.l}/>
    </td>
  </tr>);
};

type CarsCallback = (cars: any[]) => void;

const searchCars = (callback: CarsCallback) => {
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
      callback(json.results.usedcar);
    });
};

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
        searchCars(setState)
      }}>検索する!
      </button>
      {cars.length === 0 ? <></> : <CarList cars={cars}/>}
    </header>
  </div>;
};

export default App;
