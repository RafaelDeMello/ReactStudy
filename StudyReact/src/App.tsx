import { useState } from "react"


export function App(){

  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(true)

  return(
    <>
    <div>
      {hide && <p>Hide</p>}
      {!hide && <p>!Hide</p>}
      
      {hide ? <p>teste1</p> : <p>Teste2</p>}

      <button onClick={() => {setCount(count + 1)}}>{count}</button>
      <br />
      <button onClick={() => {setHide(!hide)}}>Toggle</button>
    </div>
    </>
  )
}









