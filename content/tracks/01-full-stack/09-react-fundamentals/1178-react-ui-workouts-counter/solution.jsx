function WorkoutCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button disabled={count <= 0} onClick={() => setCount((c) => Math.max(0, c - 3))}>-</button>
      <span>{count}</span>
      <button disabled={count >= 15} onClick={() => setCount((c) => Math.min(15, c + 3))}>+</button>
    </div>
  );
}
