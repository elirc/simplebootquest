function PlantSorter({ items }) {
  return <ul>{items.map((x) => <li key={x.id}>{x.name}</li>)}</ul>;
}
