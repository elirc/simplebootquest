test('roundTo returns numbers', () => {
  expect(roundTo(3.14159, 2)).toBe(3.14);
  expect(roundTo(2.5, 0)).toBe(3);
  expect(roundTo(1.005, 1)).toBe(1);
});

test('clamp', () => {
  expect(clamp(5, 0, 10)).toBe(5);
  expect(clamp(-3, 0, 10)).toBe(0);
  expect(clamp(42, 0, 10)).toBe(10);
});

test('average', () => {
  expect(average([1, 2, 3, 4])).toBe(2.5);
  expect(average([])).toBe(0);
});

test('isWhole', () => {
  expect(isWhole(4)).toBe(true);
  expect(isWhole(4.5)).toBe(false);
});
