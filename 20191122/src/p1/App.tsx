import React, {useState} from 'react';
import '../css/App.css';

const apiKey = 'cd6e9af2c6cdec39';
const fukuokaPref = 40;
/**
 * 初期状態。全く分離されていない状態。
 */
const App: React.FC = () => {
  const [data, setState] = useState([]);
  return <div className="App">
    <header className="App-header">
      <button className="search-button" onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        fetch(`https://webservice.recruit.co.jp/carsensor/usedcar/v1/?key=${apiKey}&pref=${fukuokaPref}&format=json`)
          .then(response => response.json())
          .then((json) => {
            console.log("API response", json);
            setState(json.results.usedcar);
          });
      }}>検索する
      </button>
      {data.length === 0 ? <></> : <table className="car-list">
        <thead>
        <tr>
          <th>車種</th>
          <th>写真</th>
        </tr>
        </thead>
        <tbody>
        {data.map((car: any) => <tr key={car.id}>
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
