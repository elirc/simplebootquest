test('isLeapYear', () => {
  expect([2024, 2000, 1996].map(isLeapYear)).toEqual([true, true, true]);
  expect([2023, 1900, 2100].map(isLeapYear)).toEqual([false, false, false]);
});
test('daysInMonth', () => {
  expect(daysInMonth(2024, 2)).toBe(29);
  expect(daysInMonth(2023, 2)).toBe(28);
  expect(daysInMonth(2023, 4)).toBe(30);
  expect(daysInMonth(2023, 12)).toBe(31);
});
