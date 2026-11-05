function FlightFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.number}</li>)}
      </ul>
    </div>
  );
}
