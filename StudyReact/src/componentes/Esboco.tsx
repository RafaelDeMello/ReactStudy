import React, { useState } from "react";

interface ICardProps {
  tittle: string;
  children: React.ReactNode
  footer: string;
}

const Card = (props: ICardProps) => {
  return (
    <div className="flex flex-col p-4 gap-3 border-2 items-center">
      <div>{props.tittle}</div>
      <div>{props.children}</div>
      <div>{props.footer}</div>
    </div>
  );
};

export function Exemplos() {
  const [count, setCount] = useState(0)
  const [hide, setHide] = useState(true)
  const [list, setList] = useState([
    {id: '1', label: 'Fazer Café'},
    {id: '2', label: 'Fazer Almoço'},
    {id: '2', label: 'Fazer Janta'},
  ])

  return (
    <>
      <div className="flex  flex-col items-center m-5 gap-3">
        <Card tittle="Titulo 1" footer="footer">
          <div>Card 1</div>
        </Card>
        <Card tittle="Count" footer="Footer"> 
          <div>
            <button className="border rounded-3xl p-1 bg-black text-white" onClick={() => (setCount(count + 1))}>{count}</button>
          </div>
        </Card>
        <Card tittle="SetHide or Hide" footer="Done">
          <div className="flex flex-col items-center">
            {hide ? <p>Hello World</p> : <p>Bye World</p>}
          <button className="border rounded-3xl p-1 bg-black text-white" onClick={() => {setHide(!hide)}}>Click</button>
          </div>
       </Card>
        <div className="border-black">
          <div>
             <input className="border" /> <button className="border px-1">Add task</button>
          </div>
          <div className="border p-3">
            <ol>
              {list.map((listItem) =>
              <li key={listItem.id}>
                 {listItem.label}
              </li>)}
            </ol>
         </div>
        </div>
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
