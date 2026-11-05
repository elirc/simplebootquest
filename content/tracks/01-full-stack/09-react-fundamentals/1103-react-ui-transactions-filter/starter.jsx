function TransactionFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.reference}</li>)}
      </ul>
    </div>
  );
}
