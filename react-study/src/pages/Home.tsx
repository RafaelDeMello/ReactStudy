import { useEffect, useState } from "react";
import { Count } from "../components/count";
import { InputAdd } from "../components/inputAdd";
import { Lists } from "../components/lists";
import { TodoItem } from "../components/todoList";
import { TodoApi, type ITodo } from "../shared/services/api/TodoApi";
import { PageLayout } from "../shared/layout/page-layout/PageLayout";

import "../shared/layout/AppLayout.css";



export const Home = () => {
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
          <PageLayout title="Home">
            <div style={{ textAlign: "center", marginTop: "20px" }}>
              <Count />
            </div>
            <div className="border-todo">
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
          </PageLayout>
        </>
      );
}