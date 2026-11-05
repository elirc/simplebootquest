function TransactionManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.reference}</li>)}</ul>;
}
