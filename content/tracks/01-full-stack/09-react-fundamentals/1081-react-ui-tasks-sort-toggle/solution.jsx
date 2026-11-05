function TaskSorter({ items }) {
  const [asc, setAsc] = useState(true);
  const sorted = [...items].sort((a, b) => (asc ? a.estimate - b.estimate : b.estimate - a.estimate));
  return (
    <div>
      <button onClick={() => setAsc((v) => !v)}>{asc ? 'Sort descending' : 'Sort ascending'}</button>
      <ul>{sorted.map((x) => <li key={x.id}>{x.title}</li>)}</ul>
    </div>
  );
}
