// import { useState } from "react";

function TodoItemsLeft({todos}) {
  const todosLeft = todos.reduce((acc, todo) => {
    if (!todo.completed) {
      acc++
    }
    return acc
  },0)
  return (
    <span className="todo-count">
      <strong>{todosLeft}</strong> items left
    </span>
  );
}

export default TodoItemsLeft;
