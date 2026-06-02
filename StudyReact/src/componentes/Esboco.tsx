import type React from "react";
import { useState } from "react";

interface ICardProps {
  title: string,
  children: React.ReactNode
  footer: string,
};

const Card = (props: ICardProps) => {
  return (
    <div className="border-2 p-5 flex flex-col items-center">
      <div>{props.title}</div>
      <div>{props.children}</div>
      <div>{props.footer}</div>
    </div>
  );
};

const List = () => {

  const [list, setList] = useState([
    {id: '1', label: 'Fazer Café'},
    {id: '2', label: 'Fazer Almoço'},
    {id: '3', label: 'Fazer Janta'},
  ])

   return (
      <div className="p-5">
        <div className="flex gap-2">
          <input className="border-2"/>
          <button className="bg-black rounded-3xl text-white px-1">Add Task</button>
        </div>
        <ol className="flex flex-col items-center">
          {list.map((listItem) => 
          <li key={listItem.id}>{listItem.label}</li>)}
        </ol>
      </div>
   );
};

export function Exemplos() {
  
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(true)
  

  return (
    <>
      <div className="flex flex-col items-center m-5 gap-5">
        <Card title="Title 1" footer="Footer">
          <div>Card</div>
        </Card>
        <Card title="Count" footer="SetCount">
           <div>
              <button className="bg-black text-white p-2 rounded-3xl" onClick={() => {(setCount(count + 1))}}>{count}</button>
           </div>
        </Card>
        <Card title="Hide or SetHide" footer="Hello or Bye World">
           <div className="p-5 flex flex-col">
              {hide ? <p>Hello World</p> : <p>Bye World</p>}
             <button className="bg-black text-white p-1 rounded-3xl" onClick={() => {(setHide(!hide))}}>Click</button>
           </div>
        </Card> 
        <Card title="TodoList" footer="Tarefas">
          <List />
        </Card>
      </div>
    </>
  );
}

//Funcao JS
const teste = () => {
  return 1 + 1;
};
//Funcao JS
const useTeste = () => {
  return 1 + 1;
};

//REACT HOOK
const useTestes = () => {
  const [valor] = useState(1 + 1);
  return valor;
};

//Funcao JS que retorna HTML
const testes = () => {
  return <div>Hello</div>;
};

//Componente funcional HTMl
const Teste = () => {
  return <div>Hello</div>;
};
