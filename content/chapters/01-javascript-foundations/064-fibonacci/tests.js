test('fibIterative', () => {
  expect([0, 1, 2, 3, 10].map(fibIterative)).toEqual([0, 1, 1, 2, 55]);
  expect(fibIterative(80)).toBe(23416728348467685);
});

test('fibMemo is fast', () => {
  expect(fibMemo(10)).toBe(55);
  expect(fibMemo(80)).toBe(23416728348467685);
});

test('fibSequence', () => {
  expect(fibSequence(8)).toEqual([0, 1, 1, 2, 3, 5, 8, 13]);
  expect(fibSequence(0)).toEqual([]);
});
