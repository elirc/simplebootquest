function WorkoutSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.label}</li>)}</ul>;
}
