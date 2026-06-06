import { useState } from "react";

export function App() {

  const [value, setValue] = useState('')
  const [list, setList] = useState([
    {id: '1' , label: 'Tarefa 1'},
    {id: '2' , label: 'Tarefa 2'},
  ])

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mt-3">
          <input className="border-2" 
            value={value}
            onChange={(e) => {
              setValue(e.target.value)
            }}
          />
          <button
            className="border rounded-3xl px-3"
            onClick={() => {
              setList([
                ...list,
                { id: (list.length + 1).toString(), label: value},
              ])
              setValue('')
            }}
          >
            Adicionar tarefa
          </button>
        </div>
        <ol>
          {list.map((listItem) => (
            <li key={listItem.id}>{listItem.label}</li>
          ))}
        </ol>
      </div>
    </>
  );
}
