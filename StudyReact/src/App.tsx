// componente app com contador
import React, { useState } from "react"
import { Exemplos } from "./componentes/Esboco";
//declarar interface props
interface ICardProps {
  tittle: string;
  children: React.ReactNode;
}

// Declarar componente car
const Card = (props: ICardProps) => {
  return(
    <div className="flex flex-col p-5 border-2 gap-1">
      <div>{props.tittle}</div>
      <div>{props.children}</div>
      <div>Footer</div>
    </div>
  )
}


export function App(){

  const [count, setCount] = useState(0)

  return(
    <>
     <div className="flex flex-col items-center m-1 gap-2">
      <Card tittle="Titulo 1">
        Card1
      </Card>
      <Card tittle="Titulo 2">
        Card 2
      </Card>
      <Card tittle="Count">
        <div className="flex bg-black text-white items-center justify-center rounded-2xl">
          <button onClick={() => {setCount(count + 1)}}>{count}</button>
        </div>
      </Card>
    </div>
    <Exemplos />
    </>
  )
}

//Funcao JS
const teste = () => {
  return 1 + 1
}
//Funcao JS
const useTeste = () => {
  return 1 + 1
}

//REACT HOOK
const useTestes = () => {
    const [valor] = useState(1+1)
    return valor
}

//Funcao JS que retorna HTML
const testes = () => {
  return(
    <div>Hello</div>
  )
}

//Componente funcional HTMl
const Teste = () => {
  return(
    <div>Hello</div>
  )
}







