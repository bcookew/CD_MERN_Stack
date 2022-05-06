import { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {
  const [boxes, setBoxes] = useState([]);
  const addBoxes = (newBox) => {
    setBoxes([...boxes, newBox]);
  }
  return (
    <div className="App">
      <div className="row justify-content-center">
        <Form addColors={addBoxes} />
      </div>
      <div className="row justify-content-center">
        <Display boxList={boxes} />
      </div>
    </div>
  );
}

export default App;
