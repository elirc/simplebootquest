test('all succeed', async () => {
  expect(await runAll([async () => 1, async () => 2])).toEqual([1, 2]);
});
test('collects every failure', async () => {
  const e1 = new Error('a');
  const e2 = new Error('b');
  try {
    await runAll([async () => { throw e1; }, async () => 2, async () => { throw e2; }]);
    throw new Error('should reject');
  } catch (err) {
    expect(err).toBeInstanceOf(AggregateError);
    expect(err.message).toBe('2 of 3 tasks failed');
    expect(err.errors).toEqual([e1, e2]);
  }
});
