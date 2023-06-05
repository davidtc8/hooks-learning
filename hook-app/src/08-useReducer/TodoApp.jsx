import { TodoList } from "./TodoList";
import { TodoAdd } from "./TodoAdd";
import { useTodos } from "../hooks";

export const TodoApp = () => {
  // useTodos Hook
  const { todos, handleDeleteTodo, handleToggleTodo, handleNewTodo } =
    useTodos();

  return (
    <>
      <h1>
        TodoApp {todos.length}
        <small>pendientes: {todos.filter((todo) => !todo.done).length}</small>
      </h1>
      <hr />

      <div className="row">
        <div className="col-7">
          {/* Component: TodoList */}
          <TodoList
            todos={todos}
            onDeleteTodo={handleDeleteTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className="col-5">
          <h4>Agregar TODO</h4>
          <hr />
          {/* Component: TodoAdd */}
          <TodoAdd onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
