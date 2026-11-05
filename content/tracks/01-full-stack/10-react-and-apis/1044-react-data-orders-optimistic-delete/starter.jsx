function OrderManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.code}</li>)}</ul>;
}
