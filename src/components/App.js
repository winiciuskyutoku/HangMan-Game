import Game from "./Game";
import Letters from "./Letters"
import palavras from "../palavras"
import alfabeto from "../alfabeto"


function App() {
  return (
    <div className="App">
      <Game/>
      <div className="letters">
        {alfabeto.map(e => <Letters key={e} letter={e}/>)}
      </div>
    </div>
  );
  
}

export default App;
