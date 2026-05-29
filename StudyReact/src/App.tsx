import { useState } from "react"


export function App(){
    
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(true)
  
  return(
    <>
      <div className="flex flex-col items-center">
        {hide && <p>Hello</p>}
        {!hide && <p>Destroyer World</p>}
        {hide ? <p>Poisitvo</p> : <p>Negativo</p>}
        <button onClick={() => {setHide(!hide)}}>Alert</button>
      </div>
      <div className="flex flex-col items-center">
        <button onClick={() => {setCount(count + 1)}}>{count}</button>
      </div>
    </>
  )
}









