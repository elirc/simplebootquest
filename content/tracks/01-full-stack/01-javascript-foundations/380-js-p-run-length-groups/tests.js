test('groupConsecutive', () => {
  expect(groupConsecutive([1, 1, 2, 3, 3, 3, 1])).toEqual([[1, 1], [2], [3, 3, 3], [1]]);
  expect(groupConsecutive([])).toEqual([]);
});
test('longestStreak', () => {
  expect(longestStreak(['2026-01-30', '2026-01-31', '2026-02-01', '2026-02-03'])).toBe(3);
  expect(longestStreak(['2026-03-01', '2026-03-01', '2026-03-02'])).toBe(2);
  expect(longestStreak([])).toBe(0);
});
