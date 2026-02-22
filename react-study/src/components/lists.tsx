import { useState } from "react";
import { InputAdd } from "./inputAdd";
import { TodoItem } from "./todoList";

export function Lists() {
  const [list, setList] = useState([
    { id: "1", label: "Fazer café", complete: false },
    { id: "2", label: "Fazer almoço", complete: false },
    { id: "3", label: "Fazer jantar", complete: false },
  ]);

  const handleAdd = (value: string) => {
     setList([
              ...list,
              { id: (list.length + 1).toString(), label: value, complete: false },
            ]);
  }

  const handleRemove = (id: string) => {
     setList([
      ...list.filter(item => item.id !== id)
     ])
  }

const handleComplete = (id: string) => {
     setList([
      ...list.map(item => ({
        ...item,
        complete: item.id === id ? true : item.complete
      }))
     ])
  }
  

  return (
    <>
      <div>
        <InputAdd
          onAdd={handleAdd}
          
        />
        <div style={{display: "flex",justifyContent: "center",marginTop: "20px",}}>
          <ol>
            {list.map((listItem) => (
              <TodoItem
                key={listItem.id}
                id={listItem.id}
                label={listItem.label}
                complete={listItem.complete}
                onComplete={() => handleComplete(listItem.id)}
                onRemove={() => handleRemove(listItem.id)}
              />
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
