
interface ITodoItemProps{
  id: string,
  label: string,
  complete: boolean,
  onComplete(): void,
  onRemove(): void,
}


export const TodoItem = ({complete, id, label, onComplete, onRemove}: ITodoItemProps) =>{

    return(
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
       
    )
}