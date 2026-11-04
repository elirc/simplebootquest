function pagedApi() {
  const pages = { null: { data: [1, 2], nextCursor: 'p2' }, p2: { data: [3, 4], nextCursor: 'p3' }, p3: { data: [5], nextCursor: null } };
  const requested = [];
  const fetchPage = async (cursor) => {
    requested.push(cursor);
    await sleep(1);
    return pages[cursor];
  };
  return { fetchPage, requested };
}

test('fetchAll collects every page', async () => {
  const { fetchPage, requested } = pagedApi();
  expect(await fetchAll(fetchPage)).toEqual([1, 2, 3, 4, 5]);
  expect(requested).toEqual([null, 'p2', 'p3']);
});

test('iterateAll yields items', async () => {
  const { fetchPage } = pagedApi();
  const seen = [];
  for await (const item of iterateAll(fetchPage)) seen.push(item);
  expect(seen).toEqual([1, 2, 3, 4, 5]);
});

test('findFirst stops early', async () => {
  const { fetchPage, requested } = pagedApi();
  expect(await findFirst(fetchPage, (n) => n === 3)).toBe(3);
  expect(requested).toEqual([null, 'p2']);
  expect(await findFirst(pagedApi().fetchPage, (n) => n > 99)).toBeUndefined();
});
