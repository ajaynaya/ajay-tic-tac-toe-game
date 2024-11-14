import "./Box.css"
const Box = (props)=>{
    
    return(
        <div onClick={props.onClick} className="boxes">
            <h1>{props.value}</h1>
        </div>
    )
}
export default Box;