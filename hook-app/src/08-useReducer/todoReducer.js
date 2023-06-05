export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add Todo":
      return [...initialState, action.payload];

    case "[TODO] Remove Todo":
      // Voy a regresar todos los todos, excepto el todo.id que quiero borrar
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle Todo":
      return initialState.map(todo => {
        // Aqui vamos a preguntar si el action.id es igual al todo que estoy mandando por medio del payload
        if (todo.id === action.payload) {
            // En el caso que sea así, simplemente le vamos a cambiar el done a su valor contrario
            return {
                ...todo,
                done: !todo.done //
            }
        }

        return todo
      });

    default:
      return initialState;
  }
};
