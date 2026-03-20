import "./inputAddLayout.css"
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
    <div className="imputDivLayout">
      <form>
        <p>Adicione uma nova tarefa:</p>
          <input className="inputLayout"
            value={value}
            onChange={(e) => setValue(e.target.value)}

          />
          <button className="Btn-add"
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
      </form>
    </div>
  );
}