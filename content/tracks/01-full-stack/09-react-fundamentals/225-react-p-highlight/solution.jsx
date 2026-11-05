function escapeRegExp(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function Highlight({ text, query }) {
  const q = (query ?? '').trim();
  if (!q) return <span>{text}</span>;
  const parts = text.split(new RegExp(`(${escapeRegExp(q)})`, 'gi'));
  return (
    <span>
      {parts.map((part, i) => (i % 2 === 1 ? <mark key={i}>{part}</mark> : part)).filter((p) => p !== '')}
    </span>
  );
}
