const orders = [
  { id: 'a', customer: 'ada', total: 30 },
  { id: 'b', customer: 'grace', total: 50 },
  { id: 'c', customer: 'ada', total: 5 },
];

test('sumBy', () => {
  expect(sumBy(orders, (o) => o.total)).toBe(85);
  expect(sumBy([], (o) => o.total)).toBe(0);
});

test('indexBy', () => {
  expect(indexBy(orders, 'id').b.total).toBe(50);
});

test('groupBy', () => {
  const g = groupBy(orders, 'customer');
  expect(g.ada.map((o) => o.id)).toEqual(['a', 'c']);
  expect(g.grace).toHaveLength(1);
});

test('maxBy', () => {
  expect(maxBy(orders, (o) => o.total).id).toBe('b');
  expect(maxBy([], (o) => o)).toBeUndefined();
});

test('pipeline', () => {
  expect(pipeline(3, [(n) => n + 1, (n) => n * 10])).toBe(40);
});
