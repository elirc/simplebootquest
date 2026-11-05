function OrderFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.code}</li>)}
      </ul>
    </div>
  );
}
