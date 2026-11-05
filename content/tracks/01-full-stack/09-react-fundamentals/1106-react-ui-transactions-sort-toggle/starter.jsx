function TransactionSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.reference}</li>)}</ul>;
}
