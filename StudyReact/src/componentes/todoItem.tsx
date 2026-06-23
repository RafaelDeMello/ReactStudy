interface ITodoProps {
  id: string;
  label: string;
  complete: boolean;
  onCompleteTask(): void;
  onRemoveTask(): void;
}

export const TodoItem = ({
  complete,
  id,
  label,
  onCompleteTask,
  onRemoveTask,
}: ITodoProps) => {
  return (
    
      <li className="flex items-center gap-3 border p-2" key={id}>
        {label}
        {complete ? <p>  V</p> : <p></p>}
        <button
          className="border rounded-3xl px-3 m-2"
          onClick={onCompleteTask}
        >
          V
        </button>
        <button className="border rounded-3xl px-3 m-2" onClick={onRemoveTask}>
          F
        </button>
      </li>
      
  );
};
