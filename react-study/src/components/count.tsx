import { useState } from "react";

export function Count() {
 
   const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <button onClick={() => setCount(count - 1)}>Remover</button>
      <p>Contador: {count}</p>
    </div>
  );
}
