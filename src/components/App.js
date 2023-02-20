import Game from "./Game";
import Letters from "./Letters"
import palavras from "../palavras"
import alfabeto from "../alfabeto"
import React from "react"
import Guess from "./Guess"

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
  const [isTrue, setIsTrue] = React.useState(true)
  const [clickedLetter, setClickedLetter] = React.useState([])

  const [word, setWord] = React.useState("")
  const [arrayWord, setArrayWord] = React.useState()
  const [arrayWordSplited, setArrayWordSplited] = React.useState()
  const [correctWord, setCorrectWord] = React.useState()

  const [status, setStatus] = React.useState("")


  function startGame() {
    setDisabled("enabled")
    setIsTrue(false)
    setClickedLetter([])
    setStatus("")
    setError(0)
    setNumMisses(forcas[0])

    palavras.sort(comparador)
    setWord(palavras[0])
    setArrayWord(palavras[0].split(""))
    setArrayWordSplited(palavras[0].split("").map(function (char) {
      return char = '_ ';
  }))
    setCorrectWord(palavras[0].split("").map(function (char) {
      return char = '_ ';
  }).join(""))

  }

  function comparador() {
    return Math.random() - 0.5
  }

  

  function countError(id) {
    setClickedLetter([...clickedLetter, id])


    arrayWord.filter((e, i) => {
      if(e == id){
        arrayWordSplited.splice(i, 1, e)
        if(!(arrayWordSplited.includes("_ "))){
          win()
        }
        return setCorrectWord(arrayWordSplited.join(""))
      }
    })

    if(!(arrayWord.includes(id))){
      setError(error + 1)
      setNumMisses(forcas[error + 1])
      /* error === 5 ? lose() :  false */
      if(error === 5){
        lose()
      }
    }
  }

  function win(){
    setIsTrue(true)
    setDisabled("disabled")
    setCorrectWord(word)
    setStatus("green")
  }

  function lose(){
    setIsTrue(true)
    setCorrectWord(word)
    setDisabled("disabled")
    setStatus("red")
    setNumMisses(forcas[6])
  }


  return (
    <div className="App">
      <Game onClick={startGame} misses={numMisses} correctWord={correctWord} isTrue={isTrue} status={status}/>
      <div className="letters" >
        {alfabeto.map(e => <Letters key={e} letter={e} disabled={disabled} isTrue={isTrue} onClick={countError} clickedLetter={clickedLetter} />)}
      </div>
      <Guess word={word} win={win} lose={lose} isTrue={isTrue} disabled={disabled}/>
    </div>
  );

}

export default App;
