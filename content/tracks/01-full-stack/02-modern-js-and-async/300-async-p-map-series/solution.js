async function mapSeries(items, fn) {
  const out = [];
  for (const [i, item] of items.entries()) out.push(await fn(item, i));
  return out;
}

async function asyncFilter(items, predicate) {
  const keep = await Promise.all(items.map((item) => predicate(item)));
  return items.filter((_, i) => keep[i]);
}

async function asyncReduce(items, fn, initial) {
  let acc = initial;
  for (const item of items) acc = await fn(acc, item);
  return acc;
}
