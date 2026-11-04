test('only the last call runs', async () => {
  const calls = [];
  const d = debounce((q) => calls.push(q), 20);
  d('h');
  d('he');
  d('hello');
  expect(calls).toEqual([]);
  await sleep(40);
  expect(calls).toEqual(['hello']);
});

test('separate bursts each run', async () => {
  const calls = [];
  const d = debounce((q) => calls.push(q), 10);
  d('a');
  await sleep(30);
  d('b');
  await sleep(30);
  expect(calls).toEqual(['a', 'b']);
});

test('cancel and flush', async () => {
  const calls = [];
  const d = debounce((q) => calls.push(q), 20);
  d('x');
  d.cancel();
  await sleep(40);
  expect(calls).toEqual([]);
  d('y');
  d.flush();
  expect(calls).toEqual(['y']);
  await sleep(40);
  expect(calls).toEqual(['y']);
});
