import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";

const initialState = [];

const init = () => {
  // En el caso que no se tenga nada en el local storage, que se regrese un empty string
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const useTodos = () => {
  {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    useEffect(() => {
      localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const handleNewTodo = (todo) => {
      const action = {
        type: "[TODO] Add Todo",
        payload: todo,
      };
      // El dispatch es lo que vamos a utilzar para mandar llamar esa funcion
      dispatch(action);
    };

    const handleDeleteTodo = (id) => {
      dispatch({
        type: "[TODO] Remove Todo",
        payload: id,
      });
    };

    const handleToggleTodo = (id) => {
      console.log({ id });
      dispatch({
        type: "[TODO] Toggle Todo",
        payload: id,
      });
    };

    return {
      ...todos,
      todos,
      handleDeleteTodo,
      handleToggleTodo,
      handleNewTodo,
    };
  }
};
