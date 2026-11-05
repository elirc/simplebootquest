function pageItems(page, total, siblings = 1) {
  return Array.from({ length: total }, (_, i) => i + 1);
}

function Pagination({ page, total, onChange }) {
  return <nav>{pageItems(page, total).map((n) => <button>{n}</button>)}</nav>;
}
