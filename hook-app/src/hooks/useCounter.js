// Custom Hook para manejar las sumas, las restas y reseteo de botones

import { useState } from "react";

export const useCounter = (initialValue = 4000) => {
  const [counter, setCounter] = useState(initialValue);

  const increment = (value) => {
    setCounter(counter + value);
  };

  const decrement = (value) => {
    setCounter(counter - value);
  };

  const reset = () => {
    setCounter((initialValue = 1));
  };

  return {
    counter: counter,
    increment: increment,
    decrement: decrement,
    reset: reset,
  };
};
