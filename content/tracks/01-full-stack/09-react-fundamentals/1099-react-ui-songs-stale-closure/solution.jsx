function DoubleClick() {
  const [count, setCount] = useState(2);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount((c) => c + 1);
        }}
      >
        +2
      </button>
    </div>
  );
}
