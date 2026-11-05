test('counts and chains', () => {
  const c = new Counter();
  expect(c.increment().increment().decrement().value).toBe(1);
});
test('clamps to bounds with steps', () => {
  const c = new Counter({ start: 8, max: 10, step: 5 });
  c.increment();
  expect(c.value).toBe(10);
  c.decrement().decrement().decrement();
  expect(c.value).toBe(-5);
});
test('reset and history', () => {
  const c = new Counter({ start: 1, min: 0, max: 2 });
  c.increment().increment().reset();
  expect(c.history).toEqual([1, 2, 2, 1]);
  c.history.push(99);
  expect(c.history).toHaveLength(4);
});
test('invalid start', () => expect(() => new Counter({ start: 5, max: 3 })).toThrow(RangeError));
