function TaskFeed({ loadPage }) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  useEffect(() => {
    let ignore = false;
    loadPage(page).then((res) => {
      if (ignore) return;
      setItems((prev) => [...prev, ...res.items]);
      setHasMore(res.hasMore);
    });
    return () => {
      ignore = true;
    };
  }, [page, loadPage]);
  return (
    <div>
      <ul>{items.map((x) => <li key={x.id}>{x.title}</li>)}</ul>
      {hasMore && <button onClick={() => setPage((p) => p + 1)}>Load more</button>}
    </div>
  );
}
