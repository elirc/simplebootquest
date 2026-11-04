function fails(sqlText) {
  try {
    db.exec(sqlText);
    return false;
  } catch {
    return true;
  }
}

test('accepts a valid row with defaults', () => {
  db.exec("INSERT INTO todos (title, owner_email) VALUES ('Write SQL', 'ada@x.io')");
  expect(query('SELECT title, priority, done FROM todos')).toEqual([{ title: 'Write SQL', priority: 'medium', done: 0 }]);
});

test('rejects missing or empty titles', () => {
  expect(fails("INSERT INTO todos (owner_email) VALUES ('a@x.io')")).toBe(true);
  expect(fails("INSERT INTO todos (title, owner_email) VALUES ('', 'a@x.io')")).toBe(true);
});

test('checks priority and done', () => {
  expect(fails("INSERT INTO todos (title, owner_email, priority) VALUES ('x', 'a@x.io', 'urgent')")).toBe(true);
  expect(fails("INSERT INTO todos (title, owner_email, done) VALUES ('y', 'a@x.io', 2)")).toBe(true);
});

test('unique per owner', () => {
  db.exec("INSERT INTO todos (title, owner_email) VALUES ('Same', 'a@x.io')");
  expect(fails("INSERT INTO todos (title, owner_email) VALUES ('Same', 'a@x.io')")).toBe(true);
  expect(fails("INSERT INTO todos (title, owner_email) VALUES ('Same', 'b@x.io')")).toBe(false);
});

test('requires an owner', () => {
  expect(fails("INSERT INTO todos (title) VALUES ('orphan')")).toBe(true);
});
