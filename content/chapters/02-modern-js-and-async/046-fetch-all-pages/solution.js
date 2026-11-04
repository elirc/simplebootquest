async function fetchAll(fetchPage) {
  const items = [];
  let cursor = null;
  do {
    const page = await fetchPage(cursor);
    items.push(...page.data);
    cursor = page.nextCursor;
  } while (cursor !== null);
  return items;
}

async function* iterateAll(fetchPage) {
  let cursor = null;
  do {
    const page = await fetchPage(cursor);
    yield* page.data;
    cursor = page.nextCursor;
  } while (cursor !== null);
}

async function findFirst(fetchPage, predicate) {
  for await (const item of iterateAll(fetchPage)) {
    if (predicate(item)) return item;
  }
  return undefined;
}
