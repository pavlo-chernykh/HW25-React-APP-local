import TodoItemsLeft from "./TodoItemsLeft";
import TodoFilter from "./TodoFilter";
import TodoCompleted from "./TodoCompleted";

export default function TodoFooter(props) {
  console.log(props);
  return (
    <footer className="footer">
      <TodoItemsLeft />
      <TodoFilter todos={props.todos} completed={props.completed} filter={props.filter}/>
      <TodoCompleted />
    </footer>
  );
}
