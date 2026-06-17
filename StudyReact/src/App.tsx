import { useState } from "react";
import { InputAdd } from "./componentes/Input";
import { TodoItem } from "./componentes/todItem";

export function App() {
  const [list, setList] = useState([
    { id: "1", label: "Task 1", complete: false },
    { id: "2", label: "Task 2", complete: false },
    { id: "3", label: "Task 3", complete: false },
  ]);

  const handleAdd = (value: string) => {
    setList([
      ...list,
      { id: (list.length + 1).toString(), label: value, complete: false },
    ]);
  };

  const handleCompleteItem = () => {};

  const handleRemoveItem = () => {};

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mt-3">
          <InputAdd onAdd={handleAdd} />
        </div>
        <ol>
          {list.map((listItem) => (
            <TodoItem
              key={listItem.id}
              id={listItem.id}
              label={listItem.label}
              complete={listItem.complete}
              onComplete={() => {
                setList([
                  ...list.map((item) => ({
                    ...item,
                    complete: item == listItem ? true : item.complete
                  })),
                ]);
              }}
              onRemove={() => {
                setList([
                  ...list.filter(item => item !== listItem)
                ])
              }}
            />
          ))}
        </ol>
      </div>
    </>
  );
}
