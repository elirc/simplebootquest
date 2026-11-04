async function mapWithLimit(items, limit, fn) {
  return Promise.all(items.map((item, i) => fn(item, i)));
}
