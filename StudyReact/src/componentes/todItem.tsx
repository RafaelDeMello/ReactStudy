import { useState } from "react";

interface ITodoListProps {
  id: string;
  label: string;
  complete: boolean;
  onRemove(): void;
  onComplete(): void;
}

export const TodoItem = ({ id, complete, label, onComplete, onRemove }: ITodoListProps) => {
  



  const handleRemoveItem = () => {
    onRemove()
  }

  return (
    <li key={id}>
      {label}
      {complete ? " [v]" : ""}
      <button
        className="border rounded-3xl px-3 m-2"
        onClick={onComplete}
      >
        v
      </button>
      <button
        className="border rounded-3xl px-3 m-2"
        onClick={onRemove}
      >
        x
      </button>
    </li>
  );
};
