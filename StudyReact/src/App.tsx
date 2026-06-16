import { useState } from "react";
import { InputAdd } from "./componentes/Input";

export function App() {
  const [list, setList] = useState([
    { id: "1", label: "Task 1", complete: false },
    { id: "2", label: "Task 2", complete: false },
    { id: "3", label: "Task 3", complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
       ...list,
      {id: (list.length + 1).toString(), label: value, complete: false}
    ])
  }
  
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mt-3">
          <InputAdd
            onAdd={handleAdd}
          />
        </div>
        <ol>
          {list.map((listItem) => (
            <li key={listItem.id}>
              {listItem.label}
              {listItem.complete ? " [v]" : ""}
              <button
                className="border rounded-3xl px-3 m-2"
                onClick={() => {
                  setList([
                    ...list.map((item) => ({
                      ...item,
                      complete: item.id === listItem.id ? true : item.complete,
                    })),
                  ]);
                }}
              >
                v
              </button>
              <button
                className="border rounded-3xl px-3 m-2"
                onClick={() => {
                  setList([...list.filter((item) => item.id !== listItem.id)]);
                }}
              >
                x
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
