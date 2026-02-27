import "./todoListStyle.css"

interface ITodoItemProps {
    id: string;
    label: string;
    complete: boolean;  

    onComplete: () => void;
    onRemove: () => void;
};

export const TodoItem = ({ label, complete, onComplete, onRemove }: ITodoItemProps) => {
  return (
    <li
      className="listStyle"
    >
      <div className="itemRow">
        <span className={complete ? "concluido" : ""}>{label}</span>
        <div className="buttonStyle">
            <button className="Btn-concluir"
              onClick={onComplete}
            >
              Concluir
            </button>
            <button className="Btn-remover"
              onClick={onRemove}
            >
              Remover
            </button>
        </div>
      </div>
     
  </li>
  );
};
