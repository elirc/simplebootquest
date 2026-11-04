function TodoRow({ todo, onToggle, onDelete }) {
  return (
    <li>
      <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
      <span>{todo.title}</span>
      <button className="delete" onClick={() => onDelete(todo.id)}>
        Delete
      </button>
    </li>
  );
}

function Pagination({ page, totalPages, onPageChange }) {
  return (
    <nav>
      <button className="prev" disabled={page <= 1} onClick={() => onPageChange(page - 1)}>
        Previous
      </button>
      <span>
        Page {page} of {totalPages}
      </span>
      <button className="next" disabled={page >= totalPages} onClick={() => onPageChange(page + 1)}>
        Next
      </button>
    </nav>
  );
}
