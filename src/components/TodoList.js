import TodoItem from "./TodoItem";

export default function ToDoList(props) {
  const elements = props.todos;
  const todos = [];
  elements.forEach(element => {
    if (props.filter === 'all') {
      todos.push(<TodoItem key={element.id} {...element}/>)
    }
    if (props.filter === 'completed' && element.completed === true) {
      todos.push(<TodoItem key={element.id} title={element.title} completed={element.completed}/>)
    }
    if (props.filter === 'active' && element.completed === false) {
      todos.push(<TodoItem key={element.id} title={element.title} completed={element.completed}/>)
    }
  });
  return (
    <ul className="todo-list">
      {todos}
    </ul>
  );
}
