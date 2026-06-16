import { useState } from "react";

interface IInputAddProps {
  onAdd(value: string): void,
}

export const InputAdd = (props: IInputAddProps) => {
  const [value, setValue] = useState("");

  const getValue = (e: any) => {
    setValue(e.target.value);
  };

  const handleAdd = () => {
      props.onAdd(value),
      setValue('')
  };

  return (
    <div>
      <input className="border" value={value} onChange={getValue} />
      <button className="border rounded-3xl px-3 m-2" onClick={handleAdd}>
        Add Task
      </button>
    </div>
  );
};
