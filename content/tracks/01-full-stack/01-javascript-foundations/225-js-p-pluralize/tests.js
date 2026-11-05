test('singular and plural', () => {
  expect(pluralize(1, 'item')).toBe('1 item');
  expect(pluralize(0, 'item')).toBe('0 items');
});
test('custom plural', () => expect(pluralize(2, 'person', 'people')).toBe('2 people'));
test('y endings', () => {
  expect(pluralize(3, 'category')).toBe('3 categories');
  expect(pluralize(2, 'day')).toBe('2 days');
});
test('thousands', () => expect(pluralize(1200, 'item')).toBe('1,200 items'));
