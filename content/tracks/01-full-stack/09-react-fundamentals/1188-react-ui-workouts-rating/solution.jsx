function Rating() {
  const [rating, setRating] = useState(0);
  return (
    <div>
      {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => (
        <button key={n} aria-label={`Rate ${n}`} onClick={() => setRating((r) => (r === n ? 0 : n))}>{n <= rating ? '★' : '☆'}</button>
      ))}
      <p>{rating}/5</p>
    </div>
  );
}
