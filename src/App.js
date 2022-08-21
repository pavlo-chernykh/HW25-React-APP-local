import "./styles.css";
import TodoHeader from "./components/TodoHeader.js";
import TodoToggleAll from "./components/TodoToggleAll";
import TodoFooter from "./components/TodoFooter";
import TodoList from "./components/TodoList";
import { addTodo, clearCompletedTodos, filterTodos, removeTodo, toggleTodo, toggleTodos, updateTodo } from './functions'
import { useState } from "react";
// import { useState } from "react";
const initialFilter = 'all'; // 'active', 'completed
export default function App({initialTodos}) {
  const [filter, setFilter] = useState(initialFilter);
  const [todos, setTodos] = useState(initialTodos);
  // const [state, setState] = useState({
  //   ...todos
  // })

  

  const filteredTodos = filterTodos(todos, filter);

  return (
    <section className="todoapp">
      <TodoHeader 
        addTodo={(title) => {
          setTodos(addTodo(todos, title));
        }}
      />
      <section className="main">
        <TodoToggleAll 
          toggleAll={(completed) => {
            setTodos(toggleTodos(todos, completed))
          }}
          todos={todos}
        />
        <TodoList 
          todos={filteredTodos}
          toggleTodo={(id) => {
            setTodos(toggleTodo(todos, id));
          }}
          removeTodo={(id) => {
            setTodos(removeTodo(todos, id));
          }}
          updateTodo={(id, todo) => {
            setTodos(updateTodo(todos, id, todo));
          }}
          
        />
      </section>
      <TodoFooter
        todos={filteredTodos}
        filter={filter}
        updateFilter={(filter) => {
          setFilter(filter);
        }}
        clearCompleted={() => {
          setTodos(clearCompletedTodos(todos))
        }}
      />
    </section>
  );
}
