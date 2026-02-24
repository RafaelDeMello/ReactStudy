import { useEffect, useState } from "react";
import { Count } from "./components/count";
import { InputAdd } from "./components/inputAdd";
import { Lists } from "./components/lists";
import { TodoItem } from "./components/todoList";
import { TodoApi, type ITodo } from "./shared/services/api/TodoApi";
//import { TodoApi } from "./shared/services/api/TodoApi";

/* TodoApi.getAll().then(data => console.log('1', data));

TodoApi.create({label: 'Fazer café', complete: false});
TodoApi.create({label: 'Fazer Almoço', complete: false});
TodoApi.getAll().then(data => console.log('2', data));

TodoApi.complete('1', {label: 'fazer Janta', complete: false})
TodoApi.getAll().then(data => console.log('3', data));

TodoApi.remove('1')
TodoApi.getAll().then(data => console.log('4', data));
*/

export function App() {
  const [list, setList] = useState<ITodo[]>([]);

  useEffect(() => {
    TodoApi.getAll()
    .then(data => setList(data));
  }, []);

  const handleAdd = (value: string) => {
    TodoApi.create({ label: value, complete: false })
    .then(data => { 
      setList([...list, data]);
    });
  };

  const handleRemove = (id: string) => {
    TodoApi.remove(id)
    .then(() => {
      setList([
        ...list.filter(item => item.id !== id),
      ]);
    });
  };

  const handleComplete = (id: string) => {
     TodoApi.complete(id, { complete: true})
     .then(() => {
      setList([
        ...list.map(item => ({
          ...item,
          complete: item.id === id? true : item.complete
        }))
      ])
     }) 
  };

  return (
    <>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <Count />
      </div>
      <div
        style={{
          textAlign: "center",
          border: "1px solid black",
          marginTop: "20px",
          padding: "20px",
          margin: "20px auto",
          width: "50%",
        }}
      >
        <>
          <div>
            <InputAdd onAdd={handleAdd} />
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "20px",
              }}
            >
              <Lists>
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
              </Lists>
            </div>
          </div>
        </>
      </div>
    </>
  );
}
