import { useState } from "react";

export function App() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "Fazer Café" },
    { id: "2", label: "Fazer Almoço" },
    { id: "3", label: "Fazer Janta" },
  ]);

  return (
    <>
      <div className="flex flex-col items-center p-1.5">
        <div className="flex items-center gap-1">
          <input
            className="border"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="border"
            onClick={() => {
              setList([
                ...list,
                { id: (list.length + 1).toString(), label: value },
              ]);
              setValue("")
            }}
          >
            Cadastrar
          </button>
        </div>
        <div>
          <ol className="">
            {list.map((listItem) => (
              <li key={listItem.id}>{listItem.label}</li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
