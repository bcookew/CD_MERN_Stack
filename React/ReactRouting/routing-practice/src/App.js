import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import Number from './Components/Number';
import Home from './Components/Home';
import Location from './Components/Location';

function App() {
  return (
    <BrowserRouter>
    <div className="container my-5 mx-auto p-5">
      <div className="row m-5">
        <div className="col">
          <h1>Routing example</h1>
          <p>
            <Link to="/home">Home</Link>
            &nbsp;|&nbsp;
            <Link to="/location/seattle">Seattle</Link>
            &nbsp;|&nbsp;
            <Link to="/location/chicago">Chicago</Link>
            &nbsp;|&nbsp;
            <Link to="/location/burbank">Burbank</Link>
          </p>
        </div>
      </div>
      <div className="row m-5 justify-content-center">
        <div className="col text-center">
          <Switch>
            <Route path="/home" children={Home} />
            <Route path="/location/:city" component={Location} />
            <Route path="/:data/:color?/:bgColor?" component={Number} />
          </Switch>

        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
