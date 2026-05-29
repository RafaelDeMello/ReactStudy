import { useState } from "react"



export function App(){
    
  const [list, setList] = useState([
    'Tarefa 1',
    'Tarefa 2',
    'Tarefa 3'
  ])
  
  return(
    <>
    <div className="flex flex-col items-center p-5 gap-1">
      <input className="border" />
      <button className="border p-1" onClick={() => {}}>Add</button> 


      <div>
        <ol className="list-decimal">
          {list.map((listItem) =>
          <li>{listItem}</li>)}
        </ol>
      </div>
    </div>
    
    </>
  )
}









