import React, { useState } from "react";

export default function Todolist() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const onChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      { id: todos.length + 1, text: todo, completed: false },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  // const updateTodo = (e, i) => {
  //   const newTodos = [...todos];
  //   newTodos[i].text = e.target.value;
  //   setTodos(newTodos);
  // };

  const toggleComplete = (todoId) => {
    const newTodo = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(newTodo);
  };
  const removeTodo = (todoId) => {
    setTodos(todos.filter((todo) => todoId !== todo.id));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <h1>TodoList</h1>
        <input id={todo} value={todo} onChange={onChange} />
        <button> A D D </button>
        {todos.map((todo) => (
          <div>
            <span
              style={{ textDecoration: todo.complete ? "line-through" : "" }}
              key={todo.id}
              onClick={() => {
                toggleComplete(todo.id);
              }}
            >
              <br />
              {todo.id}
              {todo.text}
            </span>
            <button onClick={() => removeTodo(todo.id)}> REMOVE </button>
            {/* <button onClick={updateTodo}> Edit </button> */}
          </div>
        ))}
      </form>
    </div>
  );
}
// style={{
//   textDecoration: todo.completed ? "line-through" : "",
// }}
