function WorkoutSorter({ items }) {
  const [asc, setAsc] = useState(true);
  const sorted = [...items].sort((a, b) => (asc ? a.calories - b.calories : b.calories - a.calories));
  return (
    <div>
      <button onClick={() => setAsc((v) => !v)}>{asc ? 'Sort descending' : 'Sort ascending'}</button>
      <ul>{sorted.map((x) => <li key={x.id}>{x.label}</li>)}</ul>
    </div>
  );
}
