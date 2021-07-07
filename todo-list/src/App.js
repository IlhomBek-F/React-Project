import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/form";
import Todo from "./components/todoList";
const App = () => {
  // states
  const [inputValue, setValue] = useState("");

  const [todos, setTodos] = useState([]);

  const [status, setTatus] = useState("all");

  const [filterTodo, setFilterTodo] = useState([]);

  // run only once

  useEffect(() => {
    getLocalItems();
  }, []);

  // useEffect

  useEffect(() => {
    filterHandler();
    saveToLocal();
  }, [todos, status]);

  // functions
  const filterHandler = () => {
    switch (status) {
      case "completed":
        setFilterTodo(todos.filter((todo) => todo.completed === true));
        break;
      case "uncompleted":
        setFilterTodo(todos.filter((todo) => todo.completed === false));
        break;
      default:
        setFilterTodo(todos);
        break;
    }
  };

  // save to localStorage

  const saveToLocal = () => {
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const getLocalItems = () => {
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let getItem = JSON.parse(localStorage.getItem("todos"));
      setTodos(getItem);
    }
  };
  return (
    <div className="App">
      <header>
        <h1>My Todo List</h1>
      </header>
      <Form
        inputValue={inputValue}
        setValue={setValue}
        setTodos={setTodos}
        todos={todos}
        setStatus={setTatus}
      />
      <Todo todos={todos} setTodos={setTodos} filterTodo={filterTodo} />
    </div>
  );
};

export default App;
