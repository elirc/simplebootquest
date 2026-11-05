function OrderSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.code}</li>)}</ul>;
}
