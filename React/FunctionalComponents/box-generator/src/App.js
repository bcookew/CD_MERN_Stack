import { useState } from 'react';
import './App.css';
import Display from './Components/Display';
import Form from './Components/Form';

function App() {
  const [colors, setColors] = useState([]);
  const addColors = (newColor) => {
    setColors([...colors, newColor]);
  }
  return (
    <div className="App">
      <div className="row justify-content-center">
        <Form addColors={addColors} />
      </div>
      <div className="row justify-content-center">
        <Display colorsList={colors} />
      </div>
    </div>
  );
}

export default App;
