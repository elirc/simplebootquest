function DoubleClick() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <span>{count}</span>
      <button
        onClick={() => {
          setCount(count + 1);
          setCount(count + 1);
        }}
      >
        +2
      </button>
    </div>
  );
}
