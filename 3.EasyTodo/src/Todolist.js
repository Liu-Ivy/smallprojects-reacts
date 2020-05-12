import React, { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const handleInput = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: todo, completed: false, display: true },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  const handleToggle = (todoId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  };

  const handleAll = () => {
    setTodos(
      todos.map((todo) => {
        return { ...todo, display: true };
      })
    );
    console.log("handleAll", todos);
  };

  const handleTodos = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.completed === false) {
          return { ...todo, display: true };
        } else {
          return { ...todo, display: false };
        }
      })
    );
    console.log("handleTodos", todos);
  };

  const handleDone = () => {
    setTodos(
      todos.map((todo) => {
        if (todo.completed === true) {
          return { ...todo, display: true };
        } else {
          return { ...todo, display: false };
        }
      })
    );
    console.log("handleDone", todos);
  };

  return (
    <div>
      <h1>TO DO LIST</h1>
      <form onSubmit={handleSubmit}>
        <input onChange={handleInput} value={todo} />
        <button> ADD </button>
        <br />
        {todos.map((todo) =>
          todo && todo.display ? (
            <>
              <span
                key={todo.id}
                onClick={() => handleToggle(todo.id)}
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.text.toUpperCase()}
              </span>
              <button onClick={() => handleDelete(todo.id)}> DELETE </button>
              <br />
            </>
          ) : null
        )}
        <span>
          <button onClick={() => handleAll()}> SHOW ALL </button>
          <button onClick={() => handleTodos()}> SHOW TODOS </button>
          <button onClick={() => handleDone()}> SHOW DONE </button>
        </span>
      </form>
    </div>
  );
}
