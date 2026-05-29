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
  const [count, setCount] = useState(0);
  const [hide, setHide] = useState(true)

  return (
    <>
      <div className="flex flex-col items-center p-2 gap-2.5">
        <Card tittle="Titulo 1" footer="footer">
          <div>Card 1</div>
        </Card>
        <Card tittle="Titulo 2" footer="footer">
          <div>Card 2</div>
        </Card>
        <Card tittle="Count" footer="">
          <div className="flex items-center justify-center bg-black text-white rounded-3xl">
            <button
              onClick={() => {
                setCount(count + 1);
              }}
            >
              {count}
            </button>
          </div>
        </Card>
        <Card tittle="SetHide or Hide" footer="Done">
          <div className="flex flex-col items-center">
            {hide && <p>HELLO WORLD</p>}
            {!hide && <p>DESTROYER WORLD</p>}
            {hide ? <p>TRUE</p> : <p>FALSE</p>}
            <button className="border p-1 rounded-2xl bg-black text-white" onClick={() => {setHide(!hide)}}> Alert </button>
          </div>
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
