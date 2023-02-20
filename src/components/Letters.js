import React from "react"


export default function Letters(props) {

    const upperCase = props.letter.toUpperCase()

    return (
        <button className={props.clickedLetter.includes(props.letter) ? "disabled" : props.disabled} disabled={props.clickedLetter.includes(props.letter) ? true : props.isTrue} onClick={() => props.onClick(props.letter)}>{upperCase}</button>
    )
}