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
  const [isTrue, setIsTrue] = React.useState(true)
  const [clickedLetter, setClickedLetter] = React.useState([])

  const [word, setWord] = React.useState("")
  const [arrayWord, setArrayWord] = React.useState()
  const [arrayWordSplited, setArrayWordSplited] = React.useState()
  const [correctWord, setCorrecWord] = React.useState()


  function startGame() {
    setDisabled("enabled")
    setIsTrue(false)
    palavras.sort(comparador)
    setWord(palavras[0])
    setArrayWord(palavras[0].split(""))
    setArrayWordSplited(palavras[0].split("").map(function (char) {
      return char = '_ ';
  }))
    setCorrecWord(palavras[0].split("").map(function (char) {
      return char = '_ ';
  }).join(""))

  }

  console.log("word", word)
  //console.log("arrayWord", arrayWord)
  //console.log("arrayWordSplited", arrayWordSplited)
  //console.log("correctWord",correctWord)

  function comparador() {
    return Math.random() - 0.5
  }

  

  function countError(id) {
    setClickedLetter([...clickedLetter, id])


    arrayWord.filter((e, i) => {
      if(e == id){
        arrayWordSplited.splice(i, 1, e)
        !(arrayWordSplited.includes("_ "))? alert("voce ganhou") : console.log("a")
        return setCorrecWord(arrayWordSplited.join(""))
      }
    })

    if(!(arrayWord.includes(id))){
      const errorTimes = error + 1
      const errorTimes2 = forcas[errorTimes]

      setError(errorTimes)
      setNumMisses(errorTimes2)
      errorTimes === 6 ? alert("fim de jogo") : console.log(errorTimes)
    }
  }


  return (
    <div className="App">
      <Game onClick={startGame} misses={numMisses} correctWord={correctWord} isTrue={isTrue} />
      <div className="letters">
        {alfabeto.map(e => <Letters key={e} letter={e} disabled={disabled} isTrue={isTrue} onClick={countError} clickedLetter={clickedLetter} />)}
      </div>
    </div>
  );

}

export default App;
