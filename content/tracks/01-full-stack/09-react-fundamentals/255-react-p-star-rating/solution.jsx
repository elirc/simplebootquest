function StarRating({ value, max = 5, onRate, readOnly }) {
  const stars = Array.from({ length: max }, (_, i) => i + 1);
  return (
    <div role="group" aria-label={`Rating: ${value} out of ${max}`}>
      {stars.map((n) => {
        const glyph = n <= value ? '★' : '☆';
        if (readOnly) return <span key={n}>{glyph}</span>;
        return (
          <button key={n} type="button" aria-label={`Rate ${n} out of ${max}`} aria-pressed={n === value} onClick={() => onRate(n === value ? 0 : n)}>
            {glyph}
          </button>
        );
      })}
    </div>
  );
}
