import { useState } from "react";
import { useCounter } from "../hooks";
import { Small } from "./Small";

export const Memorize = () => {
  const { counter, increment, decrement } = useCounter();
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>
        Counter: <Small value={counter} />
      </h1>
      <hr />
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
