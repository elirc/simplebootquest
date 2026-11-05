const events = [
  { order: 1, status: 'placed', at: '2026-03-01T10:00:00Z' },
  { order: 2, status: 'placed', at: '2026-03-01T11:00:00Z' },
  { order: 1, status: 'shipped', at: '2026-03-02T09:00:00Z' },
  { order: 2, status: 'cancelled', at: '2026-03-01T12:00:00Z' },
];
test('latest per key, newest first', () => {
  expect(latestBy(events, 'order', 'at').map((e) => `${e.order}:${e.status}`)).toEqual(['1:shipped', '2:cancelled']);
});
