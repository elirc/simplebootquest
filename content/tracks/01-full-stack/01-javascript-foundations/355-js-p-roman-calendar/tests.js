test('weekdayName', () => {
  expect(weekdayName('2026-03-09')).toBe('Monday');
  expect(weekdayName('2026-03-15')).toBe('Sunday');
});
test('nextWeekday', () => {
  expect(nextWeekday('2026-03-09')).toBe('2026-03-10');
  expect(nextWeekday('2026-03-13')).toBe('2026-03-16');
  expect(nextWeekday('2026-03-14')).toBe('2026-03-16');
});
test('businessDaysBetween', () => {
  expect(businessDaysBetween('2026-03-09', '2026-03-16')).toBe(5);
  expect(businessDaysBetween('2026-03-13', '2026-03-17')).toBe(2);
  expect(businessDaysBetween('2026-03-09', '2026-03-09')).toBe(0);
});
