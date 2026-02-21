import { useState } from "react";

export function Lists() {
  const [value, setValue] = useState("");
  const [list, setList] = useState([
    { id: "1", label: "Fazer café", complete: false },
    { id: "2", label: "Fazer almoço", complete: false },
    { id: "3", label: "Fazer jantar", complete: false },
  ]);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ margin: "50px 0 0 50px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={() => {
            if (value == "") {
              alert("O campo não pode ser vazio");
              return;
            }
            setList([
              ...list,
              {
                id: (list.length + 1).toString(),
                label: value,
                complete: false,
              },
            ]);
            setValue("");
          }}
        >
          Adicionar
        </button>
        <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
          <ol>
            {list.map((listItem) => (
              <li
                key={listItem.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginBottom: "8px",
                }}
              >
                {listItem.label}
                {listItem.complete && " (Concluído)"}
                <div
                  style={{
                    display: "inline-flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "0 8px",
                  }}
                >
                  <button
                    onClick={() =>
                      setList([
                        ...list.map((item) => ({
                          ...item,
                          complete:
                            item.id === listItem.id ? true : item.complete,
                        })),
                      ])
                    }
                  >
                    Concluir
                  </button>
                  <button
                    onClick={() =>
                      setList([...list.filter((item) => item.id !== listItem.id)])
                    }
                  >
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  );
}
