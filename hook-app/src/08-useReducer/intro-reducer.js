const initialState = [
  {
    id: 1,
    todo: "Study DSA",
    done: false,
  },
];

// Aqui es donde creamos nuestro reducer
// Usualmente se utilizan los reducers cuando tenemos un objeto elaborado y queremos hacer varios cambios al mismo
const todoReducer = (state = initialState, action = {}) => {
  if (action.type === "[TODO] add todo") {
    // Desestructuramos el estado anterior
    // Practicamente hago una copia del estado anterior para evitar mutarlo
    return [...state, action.payload];
  }

  // El reducer siempre debe de retornar un estado
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Win a padel tournament",
  done: false,
};

const addTodoAction = {
  type: "[TODO] add todo",
  payload: newTodo,
};

todos = todoReducer(todos, addTodoAction);

console.log({ state: todos });
