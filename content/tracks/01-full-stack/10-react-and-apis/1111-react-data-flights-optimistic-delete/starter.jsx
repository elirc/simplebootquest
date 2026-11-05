function FlightManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.number}</li>)}</ul>;
}
