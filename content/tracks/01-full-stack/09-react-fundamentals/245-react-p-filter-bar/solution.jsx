function visibleTodos(todos, filter, search) {
  const q = (search ?? '').trim().toLowerCase();
  return todos.filter((t) => {
    if (filter === 'active' && t.done) return false;
    if (filter === 'done' && !t.done) return false;
    return !q || t.title.toLowerCase().includes(q);
  });
}

function counts(todos) {
  const done = todos.filter((t) => t.done).length;
  return { all: todos.length, active: todos.length - done, done };
}

const FILTERS = [['all', 'All'], ['active', 'Active'], ['done', 'Done']];

function FilterBar({ todos, filter, onFilter }) {
  const c = counts(todos);
  return (
    <div role="group" aria-label="Filter todos">
      {FILTERS.map(([value, label]) => (
        <button key={value} aria-pressed={filter === value} onClick={() => onFilter(value)}>
          {`${label} (${c[value]})`}
        </button>
      ))}
    </div>
  );
}
