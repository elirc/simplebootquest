function Cart({ items }) {
  const [qty, setQty] = useState({});
  const change = (id, d) => setQty((q) => ({ ...q, [id]: Math.max(0, (q[id] ?? 0) + d) }));
  const total = items.reduce((sum, x) => sum + (qty[x.id] ?? 0) * x.replies, 0);
  return (
    <div>
      <ul>
        {items.map((x) => (
          <li key={x.id}>
            {x.subject}
            <button onClick={() => change(x.id, -1)}>-</button>
            <span>{qty[x.id] ?? 0}</span>
            <button onClick={() => change(x.id, 1)}>+</button>
          </li>
        ))}
      </ul>
      <p>Total: {total}</p>
    </div>
  );
}
