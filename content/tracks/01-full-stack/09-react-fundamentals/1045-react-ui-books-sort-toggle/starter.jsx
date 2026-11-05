function BookSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.title}</li>)}</ul>;
}
