
export default function TodoAdd({addTodo}) {


  return (
    <input
      className="new-todo" 
      placeholder="What needs to be done?"
      onKeyDown={ (e) => {
        if ((e.key === 'Enter' || e.key === 'Tab') && e.target.value.trim()) {
            e.preventDefault();
            addTodo(e.target.value.trim());
            e.target.value = '';
        }
      }}
      onClick={ (e) => {
        if (e && e.target.value.trim()) {
          e.preventDefault();
          addTodo(e.target.value.trim());
          e.target.value = '';
        }
      }}
    />
  )
}
