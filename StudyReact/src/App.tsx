// componente app com contador

import { useState } from "react"

export function App () {

const [count, setCount] = useState(0)

  return(
    <>
     <button onClick={()=> {setCount(count + 1)}}>{count}</button>
    </>
  )
}

//Funcao JS
const teste = () => {
  return 1 + 1
}

//Funcao JS
const useTest = () => {
  return 1 + 1
}

//REACT HOOK
const useTeste = () => {
    const [value] = useState(1 + 1)
    return value
}
//Funcao JS que retorna HTML
const testes = () => {
  return (
    <div>HTML</div>
  )
}

//Componente funcional HTMl
const Test = () => {
  return (
    <div>HTML </div>
  )
}






