import React, { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
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
        display: true,
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
      todos.map((item) => {
        return item.id === todoId
          ? { ...item, completed: !item.completed }
          : item;
      })
    );
  };

  const showAll = (todos) => {
    console.log(todos);
    setTodos(
      todos.map((todo) => {
        return { ...todo, display: true };
      })
    );
  };

  const showTodos = (todos) => {
    setTodos(
      todos.map((todo) => {
        if (todo.completed === false) {
          return { ...todo, display: true };
        }
        return { ...todo, display: false };
      })
    );
  };

  const showDone = (todos) => {
    setTodos(
      todos.map((todo) => {
        if (todo.completed === true) {
          return { ...todo, display: true };
        }
        return { ...todo, display: false };
      })
    );
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
        <button className="button" onClick={() => showAll(todos)}>
          Show All
        </button>
        <button className="button" onClick={() => showTodos(todos)}>
          Show Todos
        </button>
        <button className="button" onClick={() => showDone(todos)}>
          Show Done
        </button>
        <br />
        {todos.map((item) =>
          item && item.display ? (
            <>
              <div
                key={item.id}
                style={{ textDecoration: item.completed ? "line-through" : "" }}
                onClick={() => {
                  toggleCompleted(item.id);
                }}
              >
                {item.id}
                {item.text}
              </div>
              <button
                onClick={() => {
                  handleDelete(item.id);
                }}
              >
                DELETE
              </button>
            </>
          ) : null
        )}
      </form>
    </div>
  );
}
