function CarFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.model}</li>)}
      </ul>
    </div>
  );
}
