
function Game(props) {
   
    return (
        <div className="game">
            <img src={props.misses} />
            <div className="gamePanel">
                <button onClick={props.onClick} disabled={props.isTrue === true ? false : true} data-test="choose-word">Escolher Palavra</button>
                <h1 className={props.status} data-test="word">{props.isTure === true ? "" : props.correctWord}</h1>
            </div>
        </div>
    )
}

export default Game