function groupByDay(items, today) {
  return [{ label: 'Today', items }];
}

function Feed({ items, today }) {
  return <ul>{items.map((i) => <li>{i.text}</li>)}</ul>;
}
