import { useState } from "react";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "Tarefa 1", complete: false},
    { id: "2", label: "Tarefa 2", complete: false},
  ]);

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mt-3">
          <input
            className="border-2"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="border rounded-3xl px-3"
            onClick={() => {
              if(!value){
                  alert('Insira um valor!')
              } else {
                 setList([
                ...list,
                { id: (list.length + 1).toString(), label: value, complete: false},
              ]);
              setValue("");
              }
      
            }}
          >
            Add Task
          </button>
        </div>
        <ol>
          {list.map((listItem) => (
            <li key={listItem.id}>
              {listItem.label}
              {listItem.complete ? "Concluido" : ""}
              <button
                className="border rounded-3xl px-3 m-2"
                onClick={() => {
                  setList([...list.filter(item => item.id !== listItem.id)]);
                }}
              >
                Remove task
              </button>
              <button
                className="border rounded-3xl px-3 m-2"
                onClick={() => {
                  setList([...list.map(item => ({...item, complete: true}))]);
                }}
              >
                Completed task
              </button>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
}
