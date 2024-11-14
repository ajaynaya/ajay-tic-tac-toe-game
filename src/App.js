import Box from "./Components/Box" 
import {useState} from "react"
import './App.css';

function App() {
const [state,setState] = useState(Array(9).fill(null))
const [isX, setIsX] = useState(true)


function winCheck(){
  let scenarios = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
  ]
  for (let i of scenarios){
    let [a,b,c] = i
    if(state[a]!==null && state[a]===state[b] && state[a]===state[c]){
      return true;
    }
  }return false
}
let checkWinner = winCheck()
const handleClick = (index)=>{
  if(state[index] === null){
   let copyOfState = [...state]
    copyOfState[index] = isX?"X":"O";
    setState(copyOfState)
    setIsX(!isX) 
  }

  }

return (
   
    <div className="board-container">
      
      {checkWinner?<><h1 className="heading">Congratulations {isX?"O":"X"}, you won</h1></>:
      <>
      <h1 className="heading">Please {isX?"X":"O"}, it's your turn.</h1>
      <div className="board-rows">
        <Box onClick={()=>handleClick(0)} value={state[0]}/>
        <Box onClick={()=>handleClick(1)} value={state[1]}/>
        <Box onClick={()=>handleClick(2)} value={state[2]}/>
      </div>
      <div className="board-rows">
        <Box onClick={()=>handleClick(3)} value={state[3]}/>
        <Box onClick={()=>handleClick(4)} value={state[4]}/>
        <Box onClick={()=>handleClick(5)} value={state[5]}/>
      </div>
      <div className="board-rows">
        <Box onClick={()=>handleClick(6)} value={state[6]}/>
        <Box onClick={()=>handleClick(7)} value={state[7]}/>
        <Box onClick={()=>handleClick(8)} value={state[8]}/>
      </div>
      </>
    }
    </div>
  );
}

export default App;
