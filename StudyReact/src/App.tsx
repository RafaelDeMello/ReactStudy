// componente app com contador

import { useState } from "react"


export function App () {

const [count, setCount] = useState(0)

  return(
    <>
     <div className="flex justify-center mt-7">
      <button className="bg-purple-500 flex p-1 border rounded-full" onClick={()=> {setCount(count + 1)}}>{count}</button>
     </div>
    </>
  )
}

//Funcao JS
const teste = () =>{
  return 1 + 1
}

//Funcao JS
const useTeste = () => {
  return 1 + 1
}

//REACT HOOK

const useTestes = () => {
  const [valor] = useState(1 + 1)
  return valor
}


//Funcao JS que retorna HTML
const testess = () => {
  return(
    <div>hello</div>
  )
}

//Componente funcional HTMl
const Testes = () =>{
  return(
    <div>Hello</div>
  )
}






