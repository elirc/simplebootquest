function TicketFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.subject}</li>)}
      </ul>
    </div>
  );
}
