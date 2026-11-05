function WorkoutDetail({ id, load }) {
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
      <h2>{item.label}</h2>
      <p>calories burned: {item.calories}</p>
    </div>
  );
}
