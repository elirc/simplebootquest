function FlightManager({ initial, remove }) {
  const [items, setItems] = useState(initial);
  const [error, setError] = useState(null);
  async function onDelete(item) {
    const snapshot = items;
    setError(null);
    setItems((list) => list.filter((x) => x.id !== item.id));
    try {
      await remove(item.id);
    } catch {
      setItems(snapshot);
      setError('Could not delete');
    }
  }
  return (
    <div>
      {error && <p role="alert">{error}</p>}
      <ul>
        {items.map((x) => (
          <li key={x.id}>
            {x.number}
            <button onClick={() => onDelete(x)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
