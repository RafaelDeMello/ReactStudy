import "./todoListStyle.css"

interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;  

    onComplete: () => void;
    onRemove: () => void;
};

export const TodoItem = ({ id, label, complete, onComplete, onRemove }: ITodoItemProps) => {
  return (
    <li 
      key={id}
      className="listStyle"
    >
      {label}
      {complete && " (Concluído)"}
      <div className="buttonStyle"
      >
        <button className="Btn-concluir"
          onClick={onComplete}
        >
          Concluir
        </button>
        <button  className="Btn-remover"
          onClick={onRemove}
        >
          Remover
        </button>
      </div>
    </li>
  );
};
