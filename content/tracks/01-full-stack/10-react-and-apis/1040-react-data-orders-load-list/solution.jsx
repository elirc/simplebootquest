function OrderList({ load }) {
  const [state, setState] = useState({ status: 'loading', items: [] });
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    let ignore = false;
    setState({ status: 'loading', items: [] });
    load()
      .then((items) => !ignore && setState({ status: 'ready', items }))
      .catch(() => !ignore && setState({ status: 'error', items: [] }));
    return () => {
      ignore = true;
    };
  }, [load, attempt]);
  if (state.status === 'loading') return <p>Loading…</p>;
  if (state.status === 'error')
    return (
      <div>
        <p role="alert">Something went wrong</p>
        <button onClick={() => setAttempt((a) => a + 1)}>Retry</button>
      </div>
    );
  return <ul>{state.items.map((x) => <li key={x.id}>{x.code}</li>)}</ul>;
}
