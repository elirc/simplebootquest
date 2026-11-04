test('crudAction', () => {
  expect(crudAction('GET')).toBe('read');
  expect(crudAction('post')).toBe('create');
  expect(crudAction('PUT')).toBe('update');
  expect(crudAction('patch')).toBe('update');
  expect(crudAction('DELETE')).toBe('delete');
  expect(crudAction('TRACE')).toBe('unknown');
});

test('statusCategory', () => {
  expect(statusCategory(201)).toBe('success');
  expect(statusCategory(304)).toBe('redirect');
  expect(statusCategory(404)).toBe('client error');
  expect(statusCategory(503)).toBe('server error');
  expect(statusCategory(99)).toBe('unknown');
});

test('dayName', () => {
  expect(dayName(0)).toBe('Sunday');
  expect(dayName(6)).toBe('Saturday');
  expect(dayName(7)).toBe('Invalid');
});
