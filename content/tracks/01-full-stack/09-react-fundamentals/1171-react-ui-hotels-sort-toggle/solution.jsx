function HotelSorter({ items }) {
  const [asc, setAsc] = useState(true);
  const sorted = [...items].sort((a, b) => (asc ? a.nightlyPrice - b.nightlyPrice : b.nightlyPrice - a.nightlyPrice));
  return (
    <div>
      <button onClick={() => setAsc((v) => !v)}>{asc ? 'Sort descending' : 'Sort ascending'}</button>
      <ul>{sorted.map((x) => <li key={x.id}>{x.name}</li>)}</ul>
    </div>
  );
}
