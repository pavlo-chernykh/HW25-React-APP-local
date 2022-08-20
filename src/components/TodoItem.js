export default function TodoItem(props) {
  return (
    <li id={props.id} className={props.completed ? 'completed' : ''} >
      <div className="view">
        <input className="toggle" type="checkbox" defaultChecked={props.completed}/>
        <label>{props.title}</label>
        <button className="destroy"></button>
      </div>
      <input type="text" className="edit" defaultValue={props.title} />
    </li>
  );
}
