function Badge({ count, max = 99, label = 'notifications' }) {
  if (count <= 0) return null;
  return (
    <span className="badge" aria-label={`${count} ${label}`}>
      {count > max ? `${max}+` : count}
    </span>
  );
}
