import React from "react";
import "./TodoApp.css";

export default function TodoApp() {
  const [todo, setTodo] = React.useState("");
  const [todos, setTodos] = React.useState([]);

  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  const addTodo = () => {
    setTodos([
      ...todos,
      {
        id: todos.length + 1,
        text: todo,
        completed: false,
      },
    ]);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (todo === "") return;
    addTodo();
    setTodo("");
  };

  const removeTodo = (todoId) => {
    const updatedTodos = todos.filter((todo) => todo.id !== todoId);
    setTodos(updatedTodos);
  };

  const toggleTodo = (todoId) => {
    const updatedTodos = todos.map((todo) => {
      return todo.id === todoId
        ? { ...todo, completed: !todo.completed }
        : todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}>
        <label htmlFor="todo">Todo text</label>
        <br />
        <input
          id="todo"
          className="todo-input"
          onChange={handleChange}
          value={todo}
        />
        <button type="submit" className="add-btn">
          Add
        </button>
      </form>
      <div>
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>
              <span
                className={todo.completed ? "todo-completed" : undefined}
                onClick={() => toggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <span className="delete-btn" onClick={() => removeTodo(todo.id)}>
                x
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
