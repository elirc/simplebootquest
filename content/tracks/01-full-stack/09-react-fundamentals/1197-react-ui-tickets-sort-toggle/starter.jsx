function TicketSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.subject}</li>)}</ul>;
}
