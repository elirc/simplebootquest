function SongPager({ items }) {
  const [page, setPage] = useState(1);
  const pages = Math.max(1, Math.ceil(items.length / 3));
  const visible = items.slice((page - 1) * 3, page * 3);
  return (
    <div>
      <ul>{visible.map((x) => <li key={x.id}>{x.title}</li>)}</ul>
      <p>Page {page} of {pages}</p>
      <button disabled={page === 1} onClick={() => setPage((p) => p - 1)}>Previous</button>
      <button disabled={page === pages} onClick={() => setPage((p) => p + 1)}>Next</button>
    </div>
  );
}
