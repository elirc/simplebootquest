test('downtimeAllowed', () => {
  expect(downtimeAllowed(99.9, 30)).toBe(43.2);
  expect(downtimeAllowed(99, 7)).toBe(100.8);
  expect(downtimeAllowed(99.99, 30)).toBe(4.3);
});

test('budgetReport', () => {
  expect(budgetReport(99.9, 1_000_000, 400)).toEqual({ availability: 99.96, budgetUsed: 0.4, remaining: 600 });
  expect(budgetReport(99.9, 1_000_000, 1500)).toEqual({ availability: 99.85, budgetUsed: 1.5, remaining: 0 });
});

test('burnRate', () => {
  expect(burnRate(99.9, 10_000, 10)).toBe(1);
  expect(burnRate(99.9, 10_000, 144)).toBe(14.4);
  expect(burnRate(99.9, 0, 0)).toBe(0);
});
