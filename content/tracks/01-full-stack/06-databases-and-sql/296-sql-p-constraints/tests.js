test("the table starts empty", () => {
  expect(query("SELECT COUNT(*) AS n FROM users")).toEqual([{"n": 0}]);
});
test('accepts valid rows and applies the default role', () => {
  query("INSERT INTO users (email, username) VALUES ('ok@test.io', 'okay')");
  query("INSERT INTO users (email, username, role, age) VALUES ('a@test.io', 'admin_1', 'admin', 30)");
  expect(query('SELECT username, role, age FROM users ORDER BY id')).toEqual([
    { username: 'okay', role: 'member', age: null },
    { username: 'admin_1', role: 'admin', age: 30 },
  ]);
});
test('email is required and unique', () => {
  query("INSERT INTO users (email, username) VALUES ('dup@test.io', 'first')");
  expect(() => query("INSERT INTO users (email, username) VALUES ('dup@test.io', 'second')")).toThrow();
  expect(() => query("INSERT INTO users (username) VALUES ('noemail')")).toThrow();
});
test('username length is checked', () => {
  expect(() => query("INSERT INTO users (email, username) VALUES ('s@test.io', 'ab')")).toThrow();
  expect(() => query("INSERT INTO users (email, username) VALUES ('l@test.io', 'abcdefghijklmnopqrstu')")).toThrow();
  expect(() => query("INSERT INTO users (email) VALUES ('n@test.io')")).toThrow();
});
test('role and age are checked', () => {
  expect(() => query("INSERT INTO users (email, username, role) VALUES ('r@test.io', 'rooty', 'root')")).toThrow();
  expect(() => query("INSERT INTO users (email, username, age) VALUES ('k@test.io', 'kiddo', 12)")).toThrow();
});
