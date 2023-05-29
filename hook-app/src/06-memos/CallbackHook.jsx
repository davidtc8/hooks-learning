import React, { useCallback, useState } from "react";
import { ShowIncrement } from "./ShowIncrement";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  const incrementFather = useCallback(
    (value) => {
      // Esto funciona porque la funcion sabe que va a tomar el valor actual del state y le va a sumar + 1
      setCounter((localcounter) => localcounter + value);
    },
    // Un arreglo vacío significa que no se va a volver a generar nunca
    []
  );

  return (
    <>
      <h1>useCallback Hook: {counter}</h1>
      <hr />

      <ShowIncrement increment={incrementFather} />
    </>
  );
};
