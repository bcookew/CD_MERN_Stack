import './App.css';
import {useState} from 'react';

function App() {
  
  const [pokeList, setPokeList] = useState([]);
  const getPokes = () => {
    // const [mainList, setMainList] = useState([]);

    fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
      .then(response => response.json())
      // .then(response => console.log(response.results))
      .then(response => setPokeList(response.results))
      // .then(console.log(pokeList.map((item, idx)=> console.log(item.name))))
      .catch(err => console.log(err))
  };
  // const mainList = () => {
  //     setMainList(pokeList)
  // }
  return (
    <div className="App">
      <div className="container m-5 p-5">
        <div className="row justify-content-center m-5">
          <div className="col-3">
            <button onClick={getPokes} className="btn btn-warning">Fetch Pokemon</button>
          </div>
        </div>
        <div className="row row-cols-1 row-cols-md-4 row-cols-lg-5 g-4">
          {pokeList.map((item, idx) => {
            return (
            <div key={idx} className="col">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">{item.name}</h5>
                  <a href={item.url} className="btn btn-primary">Get More Info</a>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
