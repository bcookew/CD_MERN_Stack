import './App.css';
import Main from './Views/Main'
import {Routes, Route} from 'react-router-dom';
import Detail from './Views/Detail';

function App() {
  return (
    <div className="App">
      <div className="container my-5 p-5">
        <Routes>
          <Route path='/products' element={ <Main /> } />
          <Route path='/products/:id' element={ <Detail /> } />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
