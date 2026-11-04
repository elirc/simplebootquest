function TodoItem({ todo }) {
  return <li className={todo.done ? 'todo done' : 'todo'}>{todo.title}</li>;
}

function TodoList({ todos, filter = 'all' }) {
  const visible = todos.filter((t) => (filter === 'active' ? !t.done : filter === 'done' ? t.done : true));
  if (visible.length === 0) return <p className="empty">Nothing here!</p>;
  return (
    <ul>
      {visible.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
}

function Counter({ count }) {
  return count > 0 ? <span className="badge">{count}</span> : null;
}
