function StudentFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.name}</li>)}
      </ul>
    </div>
  );
}
