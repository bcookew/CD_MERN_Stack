import './App.css';
import Tabs from './Components/Tabs';

function App() {
  const tabList = [
    {
      label: "Races",
      content: "Dwarf, Elf, Half-Elf, Half-Orc, Halfling, Human..."      
    },
    {
      label: "Classes",
      content: "Barbarian, Cleric, Fighter, Paladin, Rogue, Wizard..."      
    },
    {
      label: "Alignments",
      content: "Lawful Good, Lawful Neutral, Lawful Evil, Neutral Good, True Neutral, Neutral Evil, Chaotic Good, Chaotic Neutral, Chaotic Evil"      
    }
  ]
  return (
    <div className="App">
      <main className="container p-5">
        <div className="row justify-content-center">
          <Tabs tabList={tabList} />
        </div>
      </main>
    </div>
  );
}

export default App;
