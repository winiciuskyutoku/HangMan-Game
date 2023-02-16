
function Game(props){

    return (
        <div className="game">           
            <img src={props.misses} />
            <div className="gamePanel">
                <button onClick={props.onClick} disabled={props.isTrue === true ? false : true}>Escolher Palavra</button>
                <h1>{props.isTure === true ? "" : props.correctWord}</h1>
            </div>
        </div>
    )
}

export default Game