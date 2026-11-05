function StudentSearch({ search }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [busy, setBusy] = useState(false);
  async function onSubmit(e) {
    e.preventDefault();
    const q = query.trim();
    if (!q) return;
    setBusy(true);
    try {
      setResults(await search(q));
    } finally {
      setBusy(false);
    }
  }
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} />
        <button disabled={busy}>Search</button>
      </form>
      {results && (
        <div>
          <p>{results.length} results</p>
          <ul>{results.map((x) => <li key={x.id}>{x.name}</li>)}</ul>
        </div>
      )}
    </div>
  );
}
