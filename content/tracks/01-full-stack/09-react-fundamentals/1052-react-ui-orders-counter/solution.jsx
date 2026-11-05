function OrderCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button disabled={count <= 0} onClick={() => setCount((c) => Math.max(0, c - 3))}>-</button>
      <span>{count}</span>
      <button disabled={count >= 18} onClick={() => setCount((c) => Math.min(18, c + 3))}>+</button>
    </div>
  );
}
