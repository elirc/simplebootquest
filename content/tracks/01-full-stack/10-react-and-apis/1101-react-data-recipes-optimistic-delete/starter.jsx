function RecipeManager({ initial, remove }) {
  return <ul>{initial.map((x) => <li key={x.id}>{x.name}</li>)}</ul>;
}
