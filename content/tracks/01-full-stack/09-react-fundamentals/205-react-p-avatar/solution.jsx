function initials(name) {
  const words = (name ?? '').trim().split(/\s+/).filter(Boolean);
  if (words.length === 0) return '?';
  const first = words[0][0];
  const last = words.length > 1 ? words[words.length - 1][0] : '';
  return (first + last).toUpperCase();
}

function Avatar({ name, src, size = 32 }) {
  if (src) return <img src={src} alt={name} width={size} height={size} className="avatar" />;
  const label = name && name.trim() ? name : 'Unknown user';
  return (
    <span className="avatar avatar-fallback" role="img" aria-label={label}>
      {initials(name)}
    </span>
  );
}
