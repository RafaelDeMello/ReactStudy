import { useState } from "react";

interface InputAddProps {
    onAdd(value: string): void;
}

export function InputAdd( props: InputAddProps) {

    const [value, setValue] = useState("");

    const handleAdd = () => {
        props.onAdd(value);
        setValue('');
    }

  return (
    <div>
      <p>Adicione uma nova tarefa:</p>
        <input
          style={{ margin: "0 0 0 50px" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />

        <button
          onClick={() => {
            if (value == "") {
              alert("O campo não pode ser vazio");
              return;
            }
            handleAdd();
          }}
        >
          Adicionar
        </button>
    </div>
  );
}