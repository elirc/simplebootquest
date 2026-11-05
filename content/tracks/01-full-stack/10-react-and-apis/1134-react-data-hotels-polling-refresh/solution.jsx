function HotelCount({ fetchCount }) {
  const [count, setCount] = useState(null);
  const [busy, setBusy] = useState(true);
  const refresh = useCallback(() => {
    setBusy(true);
    fetchCount().then((n) => {
      setCount(n);
      setBusy(false);
    });
  }, [fetchCount]);
  useEffect(() => {
    refresh();
  }, [refresh]);
  return (
    <div>
      {count !== null && <p>{count} hotels</p>}
      <button disabled={busy} onClick={refresh}>{busy ? 'Refreshing…' : 'Refresh'}</button>
    </div>
  );
}
