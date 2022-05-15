import './App.css';
import Main from './Views/Main'
import {Routes, Route} from 'react-router-dom';
import AuthorForm from './Components/AuthorForm';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Main /> } > 
            <Route path='new' element={<AuthorForm />} />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
