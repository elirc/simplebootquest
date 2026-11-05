function EventCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button disabled={count <= 0} onClick={() => setCount((c) => Math.max(0, c - 2))}>-</button>
      <span>{count}</span>
      <button disabled={count >= 8} onClick={() => setCount((c) => Math.min(8, c + 2))}>+</button>
    </div>
  );
}
