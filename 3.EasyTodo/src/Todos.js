import React from "react";

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

// import React, { useState } from "react";

// export default function Todolist() {
//   const [todo, setTodo] = useState("");
//   const [todos, setTodos] = useState([]);
//   const handleClick = (e) => {
//     setTodo(e.target.value);
//   };

//   const addTodo = () => {
//     setTodos([
//       ...todos,
//       {
//         id: todos.length + 1,
//         text: todo,
//         completed: false,
//         display: true,
//       },
//     ]);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (todo === "") return;
//     addTodo();
//     setTodo("");
//   };

//   const toggleCompleted = (todoId) => {
//     setTodos(
//       todos.map((todo) => {
//         return todo.id === todoId
//           ? { ...todo, completed: !todo.completed }
//           : todo;
//       })
//     );
//   };

//   const showAll = (todos) => {
//     setTodos(
//       todos.map((todo) => {
//         return { ...todo, display: true };
//       })
//     );
//   };

//   const showTodos = (todos) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.completed === false) {
//           return { ...todo, display: true };
//         }
//         return { ...todo, display: false };
//       })
//     );
//   };

//   const showDone = (todos) => {
//     setTodos(
//       todos.map((todo) => {
//         if (todo.completed === true) {
//           return { ...todo, display: true };
//         }
//         return { ...todo, display: false };
//       })
//     );
//   };

//   const handleDelete = (todoId) => {
//     setTodos(todos.filter((todo) => todo.id !== todoId));
//   };

//   return (
//     <div>
//       <form onSubmit={handleSubmit}>
//         <h1>TodoList</h1>
//         <input id="todo" onChange={handleClick} value={todo} />
//         <button type="submit"> ADD </button>
//         <button className="button" onClick={() => showAll(todos)}>
//           Show All
//         </button>
//         <button className="button" onClick={() => showTodos(todos)}>
//           Show Todos
//         </button>
//         <button className="button" onClick={() => showDone(todos)}>
//           Show Done
//         </button>
//         <br />
//         {todos.map((todo) =>
//           todo && todo.display ? (
//             <>
//               <span
//                 key={todo.id}
//                 style={{ textDecoration: todo.completed ? "line-through" : "" }}
//                 onClick={() => {
//                   toggleCompleted(todo.id);
//                 }}
//               >
//                 {todo.text}
//               </span>
//               <button
//                 onClick={() => {
//                   handleDelete(todo.id);
//                 }}
//               >
//                 DELETE
//               </button>
//               <br />
//             </>
//           ) : null
//         )}
//       </form>
//     </div>
//   );
// }
