export default function TodoFilter({filter}) {

  return (
    <ul className="filters">
      <li>
        <a href="/" className={filter === 'all' ? 'selected': ''}>
          All
        </a>
      </li>
      <li>
        <a className={filter === 'active' ? 'selected': ''} href="/active">Active</a>
      </li>
      <li>
        <a className={filter === 'completed' ? 'selected': ''} href="/completed">Completed</a>
      </li>
    </ul>
  );
}
