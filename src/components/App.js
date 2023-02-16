import Game from "./Game";
import Letters from "./Letters"
import palavras from "../palavras"
import alfabeto from "../alfabeto"
import React from "react"

import forca0 from "../assets/forca0.png"
import forca1 from "../assets/forca1.png"
import forca2 from "../assets/forca2.png"
import forca3 from "../assets/forca3.png"
import forca4 from "../assets/forca4.png"
import forca5 from "../assets/forca5.png"
import forca6 from "../assets/forca6.png"

const forcas = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]

function App() {

  const [disabled, setDisabled] = React.useState("disabled")
  const [error, setError] = React.useState(0)
  const [numMisses, setNumMisses] = React.useState(forcas[error])
  const [word, setWord] = React.useState("")
  const [isTrue, setIsTrue] = React.useState(true)
  const [clickedLetter, setClickedLetter] = React.useState([])
  const arrayWord = word.split("").map(function(char) {
    return char = '_ ';
  })


  const correctWord = arrayWord.join("")
 

  function startGame(){
    setDisabled("enabled")
    setIsTrue(false)
    palavras.sort(comparador)
    setWord(palavras[0])
  } 

  console.log(arrayWord)

  function comparador(){
    return Math.random() - 0.5
  }

  function countError(id){
    setError(error + 1)
    setNumMisses(forcas[error + 1])
    setClickedLetter([...clickedLetter, id])  
    error === 5 ? alert("fim de jogo") : console.log(error, numMisses)

  }

  return (
    <div className="App">
      <Game onClick={startGame} misses={numMisses} word={word} isTrue={isTrue} correctWord={correctWord}/>
      <div className="letters">
        {alfabeto.map(e => <Letters key={e} letter={e} disabled={disabled} isTrue={isTrue} onClick={countError} clickedLetter={clickedLetter}/> )}
      </div>
    </div>
  );
  
}

export default App;
