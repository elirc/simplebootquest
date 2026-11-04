const dto = {
  id: 'o1',
  created_at: '2026-03-05T10:00:00.000Z',
  total_cents: 1999,
  status: 'paid',
  line_items: [{ product_name: 'Pen', qty: 2 }],
};

test('toOrder', () => {
  const order = toOrder(dto);
  expect(order.createdAt).toBeInstanceOf(Date);
  expect(order.createdAt.toISOString()).toBe('2026-03-05T10:00:00.000Z');
  expect(order.total).toBe(19.99);
  expect(order.status).toBe('paid');
  expect(order.items).toEqual([{ name: 'Pen', quantity: 2 }]);
});

test('unknown statuses default to pending', () => {
  expect(toOrder({ ...dto, status: 'teleported' }).status).toBe('pending');
});

test('round trip', () => {
  expect(toOrderDto(toOrder(dto))).toEqual(dto);
});

test('camelize', () => {
  expect(camelize({ user_id: 1, created_at: 'x', name: 'Ada' })).toEqual({ userId: 1, createdAt: 'x', name: 'Ada' });
});
