function WorkoutFilter({ items }) {
  return (
    <div>
      <input />
      <ul>
        {items.map((x) => <li key={x.id}>{x.label}</li>)}
      </ul>
    </div>
  );
}
