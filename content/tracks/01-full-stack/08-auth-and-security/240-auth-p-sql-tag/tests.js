test('single parameter', () => {
  const email = "' OR '1'='1";
  expect(sql`SELECT * FROM users WHERE email = ${email}`).toEqual({ text: 'SELECT * FROM users WHERE email = $1', values: [email] });
});
test('several parameters', () => {
  expect(sql`UPDATE todos SET title = ${'Milk'}, done = ${true} WHERE id = ${5}`).toEqual({
    text: 'UPDATE todos SET title = $1, done = $2 WHERE id = $3',
    values: ['Milk', true, 5],
  });
});
test('arrays expand for IN lists', () => {
  expect(sql`SELECT * FROM todos WHERE user_id = ${7} AND id IN (${[1, 2, 3]})`).toEqual({
    text: 'SELECT * FROM todos WHERE user_id = $1 AND id IN ($2, $3, $4)',
    values: [7, 1, 2, 3],
  });
  expect(() => sql`SELECT * FROM t WHERE id IN (${[]})`).toThrow('Empty list in sql');
});
test('raw fragments', () => {
  const column = sql.raw('created_at');
  expect(sql`SELECT * FROM todos ORDER BY ${column} DESC LIMIT ${10}`).toEqual({ text: 'SELECT * FROM todos ORDER BY created_at DESC LIMIT $1', values: [10] });
});
test('a string is never raw', () => expect(sql`SELECT ${'1; DROP TABLE users'}`).toEqual({ text: 'SELECT $1', values: ['1; DROP TABLE users'] }));
