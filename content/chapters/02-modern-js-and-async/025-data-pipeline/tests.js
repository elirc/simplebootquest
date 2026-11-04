const events = [
  { type: 'view', userId: 'u1', at: '2026-03-01T09:00:00Z' },
  { type: 'signup', userId: 'u1', at: '2026-03-01T09:05:00Z' },
  { type: 'purchase', userId: 'u1', at: '2026-03-01T10:00:00Z', amount: 70 },
  { type: 'view', userId: 'u2', at: '2026-03-01T11:00:00Z' },
  { type: 'purchase', userId: 'u2', at: '2026-03-01T12:00:00Z', amount: 30 },
  { type: 'view', userId: 'u3', at: '2026-03-02T08:00:00Z' },
  { type: 'signup', userId: 'u3', at: '2026-03-02T08:01:00Z' },
  { type: 'purchase', userId: 'u1', at: '2026-03-02T09:00:00Z', amount: 20 },
];

test('counts', () => {
  const s = summarize(events);
  expect(s.uniqueVisitors).toBe(3);
  expect(s.signups).toBe(2);
  expect(s.revenue).toBe(120);
});

test('revenue by day', () => {
  expect(summarize(events).revenueByDay).toEqual({ '2026-03-01': 100, '2026-03-02': 20 });
});

test('conversion and top spender', () => {
  const s = summarize(events);
  expect(s.conversionRate).toBe(0.67);
  expect(s.topSpender).toBe('u1');
});

test('empty input', () => {
  expect(summarize([])).toEqual({ uniqueVisitors: 0, signups: 0, revenue: 0, revenueByDay: {}, conversionRate: 0, topSpender: null });
});
