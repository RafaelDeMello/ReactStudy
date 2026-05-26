// componente app com contador

import { useState } from "react"
//declarar interface props
interface ICardProps {
  title: string;
}

// Declarar componente car

const Card = (props: ICardProps) => {
  return(
    <>
      <div>
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
    <div>
       <div>
          <button onClick={()=>{setCount(count + 1)}}>{count}</button>
      </div>
      <Card title="Card 1"/>
      <Card title="Card 2"/> 
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






