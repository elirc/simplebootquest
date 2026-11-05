function pageItems(page, total, siblings = 1) {
  const pages = new Set([1, total]);
  for (let p = page - siblings; p <= page + siblings; p++) if (p >= 1 && p <= total) pages.add(p);
  const sorted = [...pages].sort((a, b) => a - b);
  const out = [];
  sorted.forEach((p, i) => {
    const prev = sorted[i - 1];
    if (prev !== undefined) {
      if (p - prev === 2) out.push(prev + 1);
      else if (p - prev > 2) out.push('…');
    }
    out.push(p);
  });
  return out;
}

function Pagination({ page, total, onChange }) {
  return (
    <nav aria-label="Pagination">
      <button aria-label="Previous page" disabled={page <= 1} onClick={() => onChange(page - 1)}>‹</button>
      {pageItems(page, total).map((item, i) =>
        item === '…' ? (
          <span key={`gap-${i}`}>…</span>
        ) : (
          <button key={item} aria-current={item === page ? 'page' : undefined} onClick={() => onChange(item)}>
            {item}
          </button>
        ),
      )}
      <button aria-label="Next page" disabled={page >= total} onClick={() => onChange(page + 1)}>›</button>
    </nav>
  );
}
