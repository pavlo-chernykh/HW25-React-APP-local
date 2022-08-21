import TodoItemsLeft from "./TodoItemsLeft";
import TodoFilter from "./TodoFilter";
import TodoCompleted from "./TodoCompleted";

export default function TodoFooter({filter, updateFilter, todos, clearCompleted}) {
  const style = todos.length > 0 ? {display: 'block'} : {display: 'none'};
  return (
    <footer className="footer" style={style}>
      <TodoItemsLeft todos={todos}/>
      <TodoFilter filter={filter} updateFilter={updateFilter} />
      <TodoCompleted clearCompleted={clearCompleted}/>
    </footer>
  );
}
