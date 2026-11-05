function TransactionDetail({ id, load }) {
  const [item, setItem] = useState(null);
  useEffect(() => {
    let ignore = false;
    setItem(null);
    load(id).then((x) => {
      if (!ignore) setItem(x);
    });
    return () => {
      ignore = true;
    };
  }, [id, load]);
  if (!item) return <p>Loading…</p>;
  return (
    <div>
      <h2>{item.reference}</h2>
      <p>day of the month: {item.day}</p>
    </div>
  );
}
