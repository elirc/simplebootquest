test('distance', () => {
  expect(distance([0, 0], [3, 4])).toBe(5);
});

test('minMax', () => {
  expect(minMax([3, -2, 9, 4])).toEqual([-2, 9]);
  expect(() => minMax([])).toThrow();
});

test('useCounter returns a tuple', () => {
  const [get, inc] = useCounter(5);
  inc();
  inc();
  expect(get()).toBe(7);
});
