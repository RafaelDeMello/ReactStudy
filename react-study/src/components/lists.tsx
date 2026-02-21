import { useState } from "react";

export function Lists() {
    const [list, setList] = useState([
        {id: 1, label: "Fazer café"},
        {id: 2, label: "Fazer almoço"},
        {id: 3, label: "Fazer jantar"}
    ])


  return (
    <>
      <input />
      <button onClick={() => ({
         ...list,
         id: list.length + 1,
         
      })}>Adicionar</button>
      <ol>
        {list.map(listItem => (
            <li key={listItem.id}>
                {listItem.label}
            </li>
        ))}
      </ol>
    </>
  );
}
