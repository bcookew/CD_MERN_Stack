import { useState } from 'react';
import './App.css';
import Form from './Components/Form';
import Item from './Components/Item';

function App() {
  const [list, setList] = useState([]);
  const addToDo = (toDo) => {
    console.log(toDo);
    setList([...list, {toDoItem: toDo, isComplete: false}]);
  }
  const completed = (checked, idx) => {
    let temp = [...list];
    temp[idx].isComplete=checked;
    setList([...temp]);
  }
  const clearCompleted = () => {
    setList(list.filter(item => item.isComplete === false));
  }
  return (
    <div className="App">
      <div className="container m-5">
        <div className="row justify-content-center m-5">
          <div className="col-6">
            <Form addToDo={addToDo} />
          </div>
        </div>
        <div className="row justify-content-center m-5">
          <div className="col-auto">
            <button className='btn btn-warning btn-large' onClick={clearCompleted}>Clear Completed</button>
          </div>
        </div>
        <div className="row justify-content-center m-5">
          <div className="col-6">
            {list.map((item, idx) =>
              <Item key={idx} index={idx} item={item} completed={completed}/>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

