import React, { useState } from "react";

export default function Todolist() {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>TodoList</h1>
      </form>
    </div>
  );
}
// style={{
//   textDecoration: todo.completed ? "line-through" : "",
// }}
