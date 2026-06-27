import { useState } from "react";
import { InputAdd } from "./componentes/Input";
import { TodoItem } from "./componentes/todoItem";
import { List } from "./componentes/List";
//import { TodoApi } from "./shared/api/todoApi";

// TodoApi.getAll().then((data) => console.log("1", data));

// TodoApi.create({ label: "task1", complete: false });
// TodoApi.create({ label: "task2", complete: false });

// TodoApi.getAll().then((data) => console.log("2", data));

// TodoApi.updateById("1", { label: "mudei", complete: false });

// TodoApi.getAll().then((data) => console.log("3", data));
// TodoApi.deleteById("1");
// TodoApi.getAll().then((data) => console.log("4", data));


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

  const handleComplete = (id: string) => {
    setList([
      ...list.map((item) => ({
        ...item,
        complete: item.id === id ? true : item.complete,
      })),
    ]);
  };

  const handleRemove = (id: string) => {
    setList([...list.filter((item) => item.id !== id)]);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex gap-2 mt-3">
          <InputAdd onAdd={handleAdd} />
        </div>
        <List>
          {list.map((listItem) => (
            <TodoItem
              key={listItem.id}
              id={listItem.id}
              label={listItem.label}
              complete={listItem.complete}
              onCompleteTask={() => handleComplete(listItem.id)}
              onRemoveTask={() => handleRemove(listItem.id)}
            />
          ))}
        </List>
      </div>
    </>
  );
}
