import { useMemo, useState } from "react"
import Navbar from "./Components/Navbar/Navbar"
import "./App.css"
function App() {
  let [count,setCount] = useState(0)

  console.log("App Rendring.......?");

  let data = useMemo(() => {
    return {name: "Dostmuhammad"}
  }, [])
  
  return (
    <div className="app container">
      <Navbar name={data}/>
      <h1>{count}</h1>
      <div className="app__btn">
        <button className="btn-76" onClick={() => {setCount(count + 1 )}}>+</button>
        <button className="btn-76" onClick={() => {setCount(count - 1)}}>-</button>

      </div>

    </div>
  )
}

export default App