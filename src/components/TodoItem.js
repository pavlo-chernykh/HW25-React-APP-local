import {useState} from "react";

export default function TodoItem({id, completed, title, toggleTodo, removeTodo, updateTodo}) {
  const [value, setValue] = useState(title);
  const [edit, setEdit] = useState(false);

  const classNameEdit = edit ? 'editing' : '';
  const classNameCompleted = completed ? 'completed' : '';
  const className = `${classNameEdit} ${classNameCompleted}`;

  const handlerOnSubmit = (e) => {
    e.preventDefault();
    setEdit(false)
    updateTodo(id, {title: value, completed: false});
  };


  return (
    <li id={id} className={className} >
      <div className="view" onDoubleClick={() => {
        setEdit(true);
      }}>
        <input className="toggle" type="checkbox" checked={completed} onChange={() => toggleTodo(id)} />
        <label onClick={() => toggleTodo(id)} >{title}</label>
        <button className="destroy" onClick={() => removeTodo(id)} ></button>
      </div>
      <input type="text" 
        className="edit" 
        defaultValue={value}
        ref={inputElement => {
          // constructs a new function on each render
          if (inputElement) {
            inputElement.focus();
          }}}
        onChange={({target}) => setValue(target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Escape') {
            updateTodo(id, title);
            setEdit(false);
          }
        }}
        onKeyPress={(e) => {
          if(e.key === 'Enter') {
            handlerOnSubmit(e)
          }
        }}
        onBlur={(e) => handlerOnSubmit(e)}
      />
    </li>
  ); 
}
