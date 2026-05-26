// componente app com contador

import { useState } from "react"

interface ICardProps {
  title: string,
}

const Card = (props: ICardProps) => {
  return(
    <>
     <div className="border mt-1">
      <div>{props.title}</div>
      <div>Card</div>
      <div>Footer</div>
     </div>
    </>
  )
}

export function App () {

const [count, setCount] = useState(0)

  return(
    <>
     <div className="flex flex-col justify-center items-center m-7">
      <div>
        <button className="bg-purple-500 p-1 border rounded-full" onClick={()=> {setCount(count + 1)}}>{count}</button>
      </div>
      <Card title="Titulo 1"/>
      <Card title="Titulo 2"/>
      <Card title="Titulo 3"/>
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






