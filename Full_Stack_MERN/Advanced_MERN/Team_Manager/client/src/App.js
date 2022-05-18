import './App.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Error from './Views/Error';
import { useEffect } from 'react';
import Main from './Views/Main';
import Players from './Views/Players';
import PlayerForm from './Components/PlayerForm';
function App() {
  const nav = useNavigate();
  
  useEffect(() => {
    nav('/players/list');
  }, [])

  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Main /> } >
            <Route path='players' element={ <Players /> }>
              <Route path='list' />
              <Route path='addplayer' element={ <PlayerForm /> } />
            </Route>
            <Route path='*' element={ <Error /> } />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
