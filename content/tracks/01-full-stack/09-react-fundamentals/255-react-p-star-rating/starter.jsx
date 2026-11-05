function StarRating({ value, max = 5, onRate, readOnly }) {
  return <div>{'★'.repeat(value)}</div>;
}
