function TicketSorter({ items }) {
  const [asc, setAsc] = useState(true);
  const sorted = [...items].sort((a, b) => (asc ? a.replies - b.replies : b.replies - a.replies));
  return (
    <div>
      <button onClick={() => setAsc((v) => !v)}>{asc ? 'Sort descending' : 'Sort ascending'}</button>
      <ul>{sorted.map((x) => <li key={x.id}>{x.subject}</li>)}</ul>
    </div>
  );
}
