import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "David",
    email: "john-doe@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({target}) => {
    const { name, value } = target;
    setFormState({
        // Queremos desestructurar el formstate para no afectar nada mas que el username y el email (en caso de que 
        // tengamos mas valores en el useState)
        ...formState,
        [ name ]: value
    });
  }

 // Poner una empty list al final del useEffect quiere decir que solo quieres que se dispare una sola vez
  useEffect( () => {
    // console.log(' useEffect called! ');
  }, []);

  // Este efecto se va disparar cada vez que haya un cambio en mi formulario (formState)
  useEffect( () => {
    // console.log(' formState Changed! ');
  }, [formState]);

  // Este efecto se va disparar cada vez que haya un cambio en el email (email)
  useEffect( () => {
    // console.log(' email Changed! ');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={ onInputChange }
      />
      <input
        type="email"
        className="form-control mt-3"
        placeholder="john-doe@gmail.com"
        name="email"
        value={email}
        onChange={ onInputChange }
      />
      {
        (username === 'strider2') && <Message className='hidden'/> 
        }
    </>
  );
};
