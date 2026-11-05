function RepoCounter() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button disabled={count <= 0} onClick={() => setCount((c) => Math.max(0, c - 5))}>-</button>
      <span>{count}</span>
      <button disabled={count >= 30} onClick={() => setCount((c) => Math.min(30, c + 5))}>+</button>
    </div>
  );
}
