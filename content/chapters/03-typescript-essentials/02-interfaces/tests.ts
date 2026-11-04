test('books without a due date are not overdue', () => {
  expect(isOverdue({ id: 1, title: 'A' }, '2026-03-01')).toBe(false);
});

test('compares due dates', () => {
  expect(isOverdue({ id: 1, title: 'A', dueDate: '2026-02-28' }, '2026-03-01')).toBe(true);
  expect(isOverdue({ id: 1, title: 'A', dueDate: '2026-03-01' }, '2026-03-01')).toBe(false);
  expect(isOverdue({ id: 1, title: 'A', dueDate: '2026-03-02' }, '2026-03-01')).toBe(false);
});

test('checkout sets a due date across month boundaries', () => {
  expect(checkout({ id: 1, title: 'A' }, '2026-01-25', 14).dueDate).toBe('2026-02-08');
});

test('checkout returns a new object', () => {
  const book = { id: 1, title: 'A' };
  const out = checkout(book, '2026-01-01', 7);
  expect(out).not.toBe(book);
  expect(book).toEqual({ id: 1, title: 'A' });
});

test('lists overdue titles alphabetically', () => {
  const books = [
    { id: 1, title: 'Zebra Tales', dueDate: '2026-01-01' },
    { id: 2, title: 'Fresh Book', dueDate: '2026-12-01' },
    { id: 3, title: 'Apple Pie', dueDate: '2026-01-02' },
    { id: 4, title: 'No Due Date' },
  ];
  expect(overdueTitles(books, '2026-06-01')).toEqual(['Apple Pie', 'Zebra Tales']);
});
