import "./styles.css";
import TodoHeader from "./components/TodoHeader.js";
import TodoToggleAll from "./components/TodoToggleAll";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
// import { useState } from "react";

export default function App(props) {

  // const [completed, setComplete] = useState(false);

  // function createTodo(title) {
  //   return { id: Date.now(), title, completed: false }
  // }

  // function addTodo(todos, title) {
  //   return [...todos, createTodo(title)];
  // }

  // function removeTodo(todos, id) {
  //   return todos.filter((todo) => todo.id !== id);
  // }

  // function toggleTodo(todos, id) {
  //   return todos.map((todo) => {
  //     if (todo.id === id) {
  //       return { ...todo, completed: !todo.completed }
  //     }
  //     return todo;
  //   })
  // }

  // function toggleTodos(todos, completed) {
  //   return todos.map((todo) => ({ ...todo, completed}));
  // }

  // function clearCompletedTodos(todos) {
  //   return todos.filter((todo) => !todo.completed)
  // }

  // function updateTodo(todos, id, todo) {
  //   return todos.map((eachTodo) => {
  //     if (eachTodo.id === id) {
  //       return { ...eachTodo, ...todo};
  //     }
  //     return eachTodo;
  //   })
  // }
  const filter = 'all'; // 'active', 'completed

  return (
    <section className="todoapp">
      <TodoHeader />
      <section className="main">
        <TodoToggleAll />
        <TodoList 
          todos={props.todos}
          filter={filter}
        />
      </section>
      <TodoFooter
        todos={props.todos}
        filter={filter}
        // completed={completed}
        // toggleComplete={item => setComplete(item)}
      />
    </section>
  );
}
