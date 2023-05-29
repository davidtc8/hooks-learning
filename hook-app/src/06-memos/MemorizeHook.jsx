import { useMemo, useState } from "react";
import { useCounter } from "../hooks";

const heavyStuff = ( iterationNumber = 100) => {
  for( let i = 0; i< iterationNumber; i++ ) {
    console.log('Ahi vamos...')
  }

  return `${ iterationNumber} iteraciones realizadas`
}

export const MemoHook = () => {
  const { counter, increment, decrement } = useCounter();
  const [show, setShow] = useState(true);

  // El usememo va a memorizar lo que sea que retorne
  // el MemorizedValue se va a quedar igual a menos que las dependencias del useMemo cambien
  // Aqui practicamente le estoy diciendo que lo va a tener que memorizar si el counter cambia
  const memorizedValue = useMemo( () => heavyStuff(counter), [counter] )

  return (
    <>
      <h1>
        Counter: <small>{ counter }</small>
      </h1>
      <hr />

      <h4>{ memorizedValue }</h4>

      <button className="btn btn-primary" onClick={() => increment(1)}>
        +1
      </button>
      <button 
        className="btn btn-outline-primary"
        // !show = el valor opuesto que tenga show
        onClick={ () => setShow( !show )}      
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </>
  );
};
