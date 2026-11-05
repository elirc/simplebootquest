test('one call per burst, shared result', async () => {
  const calls = [];
  const save = debounceAsync(async (text) => { calls.push(text); return `saved:${text}`; }, 15);
  const results = await Promise.all([save('h'), save('he'), save('hello')]);
  expect(calls).toEqual(['hello']);
  expect(results).toEqual(['saved:hello', 'saved:hello', 'saved:hello']);
});
test('errors reach every caller', async () => {
  const save = debounceAsync(async () => { throw new Error('offline'); }, 5);
  const settled = await Promise.allSettled([save(1), save(2)]);
  expect(settled.map((s) => s.status)).toEqual(['rejected', 'rejected']);
});
