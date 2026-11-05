function CarSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.model}</li>)}</ul>;
}
