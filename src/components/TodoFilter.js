export default function TodoFilter({filter, updateFilter}) {
  // const handleFilter = (e, filter) => {
  //   e.preventDefault();
  //   updateFilter(filter)
  // };

  return (
    <ul className="filters">
      <li>
        <a href="/"
        className={filter === 'all' ? 'selected': ''}
        onClick={(e) => {
          e.preventDefault()
          updateFilter('all')
        }}
        >
          All
        </a>
      </li>
      <li>
        <a 
        className={filter === 'active' ? 'selected': ''} 
        href="/active"
        onClick={(e) => {
          e.preventDefault()
          updateFilter('active')
        }}
        >
          Active</a>
      </li>
      <li>
        <a 
        className={filter === 'completed' ? 'selected': ''} 
        href="/completed"
        onClick={(e) => {
          e.preventDefault()
          updateFilter('completed')
        }}
        >
          Completed</a>
      </li>
    </ul>
  );
}
