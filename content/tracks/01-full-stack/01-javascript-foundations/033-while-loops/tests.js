test('collatzSteps', () => {
  expect(collatzSteps(6)).toBe(8);
  expect(collatzSteps(1)).toBe(0);
  expect(collatzSteps(27)).toBe(111);
});

test('doublingsToReach', () => {
  expect(doublingsToReach(1, 100)).toBe(7);
  expect(doublingsToReach(50, 50)).toBe(0);
  expect(doublingsToReach(3, 4)).toBe(1);
});

test('digitsOf', () => {
  expect(digitsOf(1234)).toEqual([1, 2, 3, 4]);
  expect(digitsOf(0)).toEqual([0]);
  expect(digitsOf(9)).toEqual([9]);
});
