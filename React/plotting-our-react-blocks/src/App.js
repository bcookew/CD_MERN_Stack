import './App.css';
import Advertisement from './Components/Advertisement';
import Header from './Components/Header';
import Main from './Components/Main';
import Nav from './Components/Nav';
import SubContent from './Components/SubContent';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Main>
        <SubContent />
        <SubContent />
        <SubContent />
        <Advertisement />
      </Main>
    </div>
  );
}

export default App;
