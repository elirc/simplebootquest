function FlightSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.number}</li>)}</ul>;
}
