import React, { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [display, setDisplay] = useState("all");
  const handleClick = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
        // display: display,
      },
    ]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const toggleCompleted = (todoId) => {
    setTodos(
      todos.map((todo) => {
        return todo.id === todoId
          ? { ...todo, completed: !todo.completed }
          : todo;
      })
    );
  };

  const handleSwitch = () => {
    if (display === "all") {
      setDisplay(todos);
    } else if (display === "notDone") {
      setDisplay(todos.filter((todo) => !todo.complete));
    } else if (display === "done") {
      setDisplay(todos.filter((todo) => todo.complete));
    }
  };
  const handleDelete = (todoId) => {
    setTodos(todos.filter((todo) => todo.id !== todoId));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>TodoList</h1>
        <input id="todo" onChange={handleClick} value={todo} />
        <button type="submit"> ADD </button>
        <button onClick={() => handleSwitch("all")}>Show All</button>
        <button onClick={() => handleSwitch("notDone")}>Show Todos</button>
        <button onClick={() => handleSwitch("done")}>Show Done</button>
        <br />
        {todos.map((todo) => (
          <>
            <div
              key={todo.id}
              style={{ textDecoration: todo.completed ? "line-through" : "" }}
              onClick={() => {
                toggleCompleted(todo.id);
              }}
            >
              {todo.id}
              {todo.text}
            </div>
            <button
              onClick={() => {
                handleDelete(todo.id);
              }}
            >
              DELETE
            </button>
          </>
        ))}
      </form>
    </div>
  );
}
// style={{
//   textDecoration: todo.completed ? "line-through" : "",
// }}
