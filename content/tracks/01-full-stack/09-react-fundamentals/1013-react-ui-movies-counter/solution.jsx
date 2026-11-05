function MovieCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button disabled={count <= 0} onClick={() => setCount((c) => Math.max(0, c - 1))}>-</button>
      <span>{count}</span>
      <button disabled={count >= 6} onClick={() => setCount((c) => Math.min(6, c + 1))}>+</button>
    </div>
  );
}
