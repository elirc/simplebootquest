function WorkoutManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.label}</li>)}</ul>;
}
