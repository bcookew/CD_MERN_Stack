import './App.css';
import { Routes, Route } from 'react-router-dom';
import Error from './Views/Error';
import { useEffect, useState } from 'react';
import Main from './Views/Main';
import Players from './Views/Players';
import PlayerForm from './Components/PlayerForm';
import PlayerContext from './playerContext';
import axios from 'axios';
import { logMsg } from './Accessories/LogFormatting';
import PlayerList from './Components/PlayerList';
import Games from './Views/Games';
import Game from './Components/Game';

function App() {
  const [playerList, setPlayerList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/players')
      .then( res => {
        console.log(logMsg("GET All Players", true));
        setPlayerList(res.data)
      })
      .catch(err => console.log(logMsg("Error GETting Players!")))
  }, [])

  return (
    <div className="App">
      <PlayerContext.Provider value={{playerList, setPlayerList}} >
        <Routes>
          <Route path='/' element={ <Main /> } >
            <Route path='players' element={ <Players /> }>
              <Route path='list' element={ <PlayerList /> } />
              <Route path='addplayer' element={ <PlayerForm /> } />
            </Route>
            <Route path='status/game' element={ <Games /> } >
              <Route path=':id' element={ <Game /> } />
            </Route>
            <Route path='*' element={ <Error /> } />
          </Route>
        </Routes>
      </PlayerContext.Provider>
    </div>
  );
}

export default App;
