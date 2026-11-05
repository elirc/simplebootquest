function LiveCitySearch({ search }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  useEffect(() => {
    const controller = new AbortController();
    search(query, controller.signal)
      .then((list) => {
        if (!controller.signal.aborted) setResults(list);
      })
      .catch(() => {});
    return () => controller.abort();
  }, [query, search]);
  return (
    <div>
      <input value={query} onChange={(e) => setQuery(e.target.value)} />
      <ul>{results.map((x) => <li key={x.id}>{x.name}</li>)}</ul>
    </div>
  );
}
