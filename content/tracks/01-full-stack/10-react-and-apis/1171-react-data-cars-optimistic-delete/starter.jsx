function CarManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.model}</li>)}</ul>;
}
