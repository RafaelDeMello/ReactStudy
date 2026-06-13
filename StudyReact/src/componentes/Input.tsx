import { useState } from "react";

interface IInputAddProps {
    onAdd(value: string): void;
}

export const InputAdd = (props: IInputAddProps) => {

    const [value, setValue] = useState('')

    return(
        <div>
            <input
            className="border"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
          <button
            className="border rounded-3xl px-3 m-2"
            onClick={() => {
              if (!value) {
                alert("Insert Task!");
                return;
              }
              props.onAdd(value);
              setValue('');
            }}
          >
            Add Task
          </button>
        </div>
    )
}