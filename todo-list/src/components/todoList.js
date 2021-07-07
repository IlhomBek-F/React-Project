import React from "react";
import Todoli from "../components/todoli";

function Todo({ todos, setTodos, filterTodo }) {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filterTodo.map((todo) => (
          <Todoli
            text={todo.text}
            key={todo.id}
            todo={todo}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
}

export default Todo;
