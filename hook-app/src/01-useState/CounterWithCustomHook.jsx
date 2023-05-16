import { useCounter } from "../hooks/useCounter";

export const CounterWithCustomHook = () => {
    // Usando restructuración para poder mandar llamar las funciones
  const { counter, increment, decrement, reset } = useCounter();
  return (
    <>
      <div>Counter With Custom Hook: {counter}</div>
      <hr />
      {/* Lo siguiente significa que voy a aumentar mi value en 2 */}
      <button className="btn btn-primary" onClick={() => increment(2)}>
        + 1
      </button>
      <button className="btn btn-primary" onClick={reset}>
        Reset
      </button>
      <button className="btn btn-primary" onClick={() => decrement(2)}>
        - 1
      </button>
    </>
  );
};
