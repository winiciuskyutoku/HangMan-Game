
export default function Letters(props){

    const upperCase = props.letter.toUpperCase()

    function oi(){
        console.log("oi")
    }
    
    return (
            <button className="disabled" disabled onClick={oi}>{upperCase}</button>
    )
}