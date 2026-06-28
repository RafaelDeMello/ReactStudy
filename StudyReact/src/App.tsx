import { useEffect, useState } from "react";
import { InputAdd } from "./componentes/Input";
import { TodoItem } from "./componentes/todoItem";
import { List } from "./componentes/List";

import { TodoApi, type ITodo } from "./shared/api/todoApi";

// TodoApi.getAll().then((data) => console.log("1", data));

//  TodoApi.create({ label: "task1", complete: false });
//  TodoApi.create({ label: "task2", complete: false });

//  TodoApi.getAll().then((data) => console.log("2", data));

//  TodoApi.updateById("1", { label: "mudei", complete: false });

//  TodoApi.getAll().then((data) => console.log("3", data));
//  TodoApi.deleteById("1");
//  TodoApi.getAll().then((data) => console.log("4", data));

export function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoApi.getAll().then((data) => setList(data))
  }, [])

  const handleAdd = (value: string) => {
    TodoApi.create({ label: value, complete: false }).then((data) =>
      setList([...list, data]),
    );
  };

  const handleComplete = (id: string) => {
    TodoApi.updateById(id, { complete : true}).then((data) => 
      setList([
        ...list.map((item) => ({
          ...item,
          complete: item.id === id ? true : item.complete,
          data
        })),
      ]),
    );
  };

  const handleRemove = (id: string) => {
     TodoApi.deleteById(id).then(() => {
        setList([...list.filter((item) => item.id !== id)]);
     })
    
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
