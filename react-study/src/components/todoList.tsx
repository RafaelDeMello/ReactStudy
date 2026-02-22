
interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;  

    onComplete: () => void;
    onRemove: () => void;
}

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {
  return (
    <li
      key={id}
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "8px",
      }}
    >
      {label}
      {complete && " (Concluído)"}
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
          onClick={onComplete}
        >
          Concluir
        </button>
        <button
          onClick={onRemove}
        >
          Remover
        </button>
      </div>
    </li>
  );
};
