export default function TodoToggleAll({toggleAll, todos}) {
  const style = todos.length > 0 ? {display: 'block'} : {display: 'none'};
  return (
    <>
      <input id="toggle-all" className="toggle-all" type="checkbox" />
      <label 
        htmlFor="toggle-all"
        onClick={() => {
          toggleAll()
        }}
        style={style}
      >Mark all as complete</label>
    </>
  );
}
