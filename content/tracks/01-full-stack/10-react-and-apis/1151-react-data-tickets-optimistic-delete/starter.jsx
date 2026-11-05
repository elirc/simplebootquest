function TicketManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.subject}</li>)}</ul>;
}
