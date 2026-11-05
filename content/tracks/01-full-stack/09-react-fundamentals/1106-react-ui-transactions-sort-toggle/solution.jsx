function TransactionSorter({ items }) {
  const [asc, setAsc] = useState(true);
  const sorted = [...items].sort((a, b) => (asc ? a.amount - b.amount : b.amount - a.amount));
  return (
    <div>
      <button onClick={() => setAsc((v) => !v)}>{asc ? 'Sort descending' : 'Sort ascending'}</button>
      <ul>{sorted.map((x) => <li key={x.id}>{x.reference}</li>)}</ul>
    </div>
  );
}
