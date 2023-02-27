import React from "react"

export default function Guess(props) {
    const [guess, setGuess] = React.useState("")

    function checkValue(){
        if(guess === props.word){
            props.win()
            setGuess("")
        } else {
            props.lose()
            setGuess("")
        }
    }

    return(
        <div className={props.word !== "" ? "Guess" : "none"}>
            <p>Já sei a palavra!</p>
            <input data-test="guess-input"
            value={guess} 
            onChange={(e) => setGuess(e.target.value)}
            disabled={props.isTrue}></input>
            <button data-test="guess-button"onClick={checkValue} disabled={props.isTrue} className={props.isTrue === true ? props.disabled : "enabled"}>
                Chutar
            </button>
        </div>
    )
}