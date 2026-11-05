function SongFilter({ items }) {
  const [query, setQuery] = useState('');
  const q = query.trim().toLowerCase();
  const visible = items.filter((x) => x.title.toLowerCase().includes(q));
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      {visible.length === 0 ? (
        <p>No matches</p>
      ) : (
        <ul>
          {visible.map((x) => <li key={x.id}>{x.title}</li>)}
        </ul>
      )}
    </div>
  );
}
