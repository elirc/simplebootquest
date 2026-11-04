test('running total and day-over-day change', () => {
  expect(result).toEqual([
    { day: '2026-03-01', amount: 100, cumulative: 100, change: null },
    { day: '2026-03-02', amount: 150, cumulative: 250, change: 50 },
    { day: '2026-03-03', amount: 90, cumulative: 340, change: -60 },
    { day: '2026-03-04', amount: 90, cumulative: 430, change: 0 },
  ]);
});
