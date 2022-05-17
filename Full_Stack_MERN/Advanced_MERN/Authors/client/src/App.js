import './App.css';
import Main from './Views/Main'
import {Routes, Route} from 'react-router-dom';
import New from './Views/New';
import AuthorList from './Components/AuthorList';
import Edit from './Views/Edit'
import Error from './Views/Error';
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={ <Main /> } > 
            <Route index element={<AuthorList />} />
            <Route path='new' element={<New />} />
            <Route path='edit/:id' element={<Edit />} />
            <Route path='*' element={ <Error /> } />
          </Route>
        </Routes>
    </div>
  );
}

export default App;
