import './App.css';
import {
  Routes,
  Route,
  useNavigate
} from "react-router-dom";
import Films from './Views/Films';
import People from './Views/People';
import Home from './Views/Home';
import Planets from './Views/Planets';
import Species from './Views/Species';
import Starships from './Views/Starships';
import Vehicles from './Views/Vehicles';
import { useState } from 'react';
import Error from './Views/Error';

function App() {
  const [results, setResults] = useState();
  let navigate = useNavigate();
  const nav = (endpoint, results) => {
    setResults(results);
    console.log("App:", endpoint, results);
    navigate("/" + endpoint);
  }
  return (
    
      <Routes>
        <Route path="/" element={<Home nav={nav} />}>
          <Route path="films" element={<Films results={results} />} />
          <Route path="people" element={<People results={results} />} />
          <Route path="planets" element={<Planets results={results} />} />
          <Route path="species" element={<Species results={results} />} />
          <Route path="starships" element={<Starships results={results} />} />
          <Route path="vehicles" element={<Vehicles results={results} />} />
          <Route path="error" element={<Error />} />
        </Route>
      </Routes>
  );
}

export default App;
