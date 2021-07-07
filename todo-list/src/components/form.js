import React from "react";

function Form({ setValue, inputValue, setTodos, todos, setStatus }) {
  const inputTextHandle = (e) => {
    setValue(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setTodos([
      ...todos,
      {
        text: inputValue,
        completed: false,
        id: Math.random() * 1000,
      },
    ]);

    setValue("");
    console.log(todos);
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
  };

  return (
    <form>
      <input
        value={inputValue}
        onChange={inputTextHandle}
        type="text"
        className="todo-list"
      />
      <button onClick={submitHandler} className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
}

export default Form;
