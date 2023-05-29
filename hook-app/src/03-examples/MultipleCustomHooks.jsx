import { useCounter, useFetch } from "../hooks/";
import { Quote } from "./Quote";
import { LoadingQuote } from './LoadingQuote';

export const MultipleCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();
  const { data, isLoading, hasError } = useFetch(
    `https://rickandmortyapi.com/api/character/${counter}`
  );
  console.log(data);

  // Si la data tiene un valor, entonces toma el valor de la data
  // Lo que estamos haciendo con data es darle un valor de undefined a false
  const { species, status, origin, image, name } = !!data && data;

  return (
    <>
      <h1>Rick and Morty Quotes</h1>
      <hr />
      { isLoading 
        ? (
          <LoadingQuote />
        )
        : (
          <Quote
            origin={origin}
            species={species}
            status={status}
            image={image}
            name={name}
          />
        )
      }
      <div className="text-center">
        <button className="btn btn-primary" onClick={() => decrement(1)}>
          Prev Quote
        </button>
        <button className="btn btn-primary" onClick={() => reset()}>
          Reset
        </button>
        <button className="btn btn-primary" onClick={() => increment(1)}>
          Next quote
        </button>
      </div>
    </>
  );
};
