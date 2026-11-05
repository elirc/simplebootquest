function MovieFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.title}</li>)}
      </ul>
    </div>
  );
}
