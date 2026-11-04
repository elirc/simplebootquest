const sampleOrders = [
  { id: 1, total: 30, status: 'paid' },
  { id: 2, total: 15, status: 'pending' },
  { id: 3, total: 50, status: 'paid' },
  { id: 4, total: 5, status: 'refunded' },
];

test('counts all orders', () => {
  expect(summarizeOrders(sampleOrders).count).toBe(4);
});

test('revenue only includes paid orders', () => {
  expect(summarizeOrders(sampleOrders).revenue).toBe(80);
});

test('averages paid orders', () => {
  expect(summarizeOrders(sampleOrders).averagePaid).toBe(40);
});

test('groups ids by status', () => {
  expect(summarizeOrders(sampleOrders).idsByStatus).toEqual({ paid: [1, 3], pending: [2], refunded: [4] });
});

test('finds the biggest order', () => {
  expect(summarizeOrders(sampleOrders).biggest.id).toBe(3);
});

test('handles an empty list', () => {
  expect(summarizeOrders([])).toEqual({ count: 0, revenue: 0, averagePaid: 0, idsByStatus: {}, biggest: undefined });
});

test('does not mutate the input', () => {
  const copy = JSON.stringify(sampleOrders);
  summarizeOrders(sampleOrders);
  expect(JSON.stringify(sampleOrders)).toBe(copy);
});
