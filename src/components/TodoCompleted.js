function TodoCompleted({clearCompleted}) {

  return <button onClick={clearCompleted} className="clear-completed">Clear completed</button>;
}
export default TodoCompleted;