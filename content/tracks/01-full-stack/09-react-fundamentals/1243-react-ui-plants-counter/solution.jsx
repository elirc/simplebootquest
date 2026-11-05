function PlantCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button disabled={count <= 0} onClick={() => setCount((c) => Math.max(0, c - 4))}>-</button>
      <span>{count}</span>
      <button disabled={count >= 24} onClick={() => setCount((c) => Math.min(24, c + 4))}>+</button>
    </div>
  );
}
