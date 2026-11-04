test('isPriority', () => {
  expect(isPriority('high')).toBe(true);
  expect(isPriority('urgent')).toBe(false);
  expect(isPriority(3)).toBe(false);
});

test('nextPriority cycles', () => {
  expect(nextPriority('low')).toBe('medium');
  expect(nextPriority('high')).toBe('low');
});

test('priorityWeight', () => {
  expect(['low', 'medium', 'high'].map(priorityWeight)).toEqual([1, 2, 3]);
});
