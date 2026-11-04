test('daysBetween', () => {
  expect(daysBetween('2026-03-01', '2026-03-05')).toBe(4);
  expect(daysBetween('2026-03-05', '2026-03-01')).toBe(-4);
  expect(daysBetween('2026-02-27', '2026-03-01')).toBe(2);
});

test('addDays crosses months and years', () => {
  expect(addDays('2026-01-30', 3)).toBe('2026-02-02');
  expect(addDays('2026-12-31', 1)).toBe('2027-01-01');
  expect(addDays('2026-03-01', -1)).toBe('2026-02-28');
});

test('isWeekend', () => {
  expect(isWeekend('2026-03-07')).toBe(true);
  expect(isWeekend('2026-03-08')).toBe(true);
  expect(isWeekend('2026-03-09')).toBe(false);
});
