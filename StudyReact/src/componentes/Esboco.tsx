import type React from "react";
import { useState } from "react";

interface ICardProps {
  title: string;
  footer: string;
  children: React.ReactNode;
}

const Card = (props: ICardProps) => {
  return (
    <div className="flex flex-col items-center p-2">
      <div className="border m-2 flex flex-col items-center">
        <div>{props.title}</div>
        <div>{props.children}</div>
        <div>{props.footer}</div>
      </div>
    </div>
  );
};

export function Exemplos() {
  const [count, setCount] = useState(0);
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "Task 1", complete: false },
    { id: "2", label: "Task 2", complete: false },
  ]);

  const handleCount = () => {
    setCount(count + 1);
  };

  const handleAdd = () => {
    if (!value) {
      alert("Insira um valor!");
      return;
    }
    setList([
      ...list,
      {
        id: (list.length + 1).toString(),
        label: value,
        complete: false,
      },
    ]);
  };

  const handleCompleteItem = () => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id == listItem.id ? true : item.complete,
      })),
    ]);
  };

  const handleRemoveItem = () => {
    
  }

  return (
    <div className="p-2">
      <Card title="Card 1" footer="Footer">
        <div>Lorem</div>
      </Card>

      <Card title="Count" footer="SetCount">
        <button
          className="border rounded-3xl bg-black text-white"
          onClick={handleCount}
        >
          {count}
        </button>
      </Card>

      <Card title="ToDo List" footer="Footer">
        <ol className="flex flex-col items-center border p-1 m-2">
          <div>
            <input
              className="border"
              value={value}
              onChange={(e) => {
                setValue(e.target.value);
              }}
            />
            <button
              className="border p-1 m-1 rounded-3xl bg-black text-white"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
          {list.map((listItem) => (
            <li key={listItem.id}>
              {listItem.label}
              {listItem.complete ? " [V]" : ""}
              <button
                className="border p-1 m-1 rounded-3xl bg-black text-white"
                onClick={handleCompleteItem}
              >
                v
              </button>
              <button
                className="border p-1 m-1 rounded-3xl bg-black text-white"
                onClick={() => {
                  setList([...list.filter((item) => item.id !== listItem.id)]);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ol>
      </Card>
    </div>
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
