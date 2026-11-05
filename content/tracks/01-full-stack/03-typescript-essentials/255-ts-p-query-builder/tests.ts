test('builds parameterised SQL', () => {
  const q = new QueryBuilder('users').where('age', '>=', 18).where('name', 'like', "%o'brien%").orderBy('created_at', 'desc').limit(20);
  expect(q.toSQL()).toEqual({
    text: 'SELECT * FROM users WHERE age >= $1 AND name LIKE $2 ORDER BY created_at DESC LIMIT $3',
    values: [18, "%o'brien%", 20],
  });
});
test('minimal query', () => expect(new QueryBuilder('todos').toSQL()).toEqual({ text: 'SELECT * FROM todos', values: [] }));
test('rejects injection in identifiers', () => {
  expect(() => new QueryBuilder('users').where('id; DROP TABLE users', '=', 1)).toThrow('Invalid column');
  expect(() => new QueryBuilder('users').orderBy('name DESC; --')).toThrow('Invalid column');
});
