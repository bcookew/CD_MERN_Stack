import './App.css';
import Form from './Components/Form';
import FormWrapper from './Components/FormWrapper';
import NavBar from './Components/NavBar';
import Wrapper from './Components/Wrapper';

function App() {
  return (
    <div className="App">
      <Wrapper>
        <NavBar />
        <FormWrapper />
      </Wrapper>
    </div>
  );
}

export default App;
