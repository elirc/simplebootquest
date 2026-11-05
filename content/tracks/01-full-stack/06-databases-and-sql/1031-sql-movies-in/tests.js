test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"title":"Paper Moon"},{"id":2,"title":"Night Train"},{"id":3,"title":"Quiet Storm"},{"id":4,"title":"Last Light"},{"id":5,"title":"Open Road"},{"id":6,"title":"Silver Fox"},{"id":7,"title":"Blue River"},{"id":8,"title":"Cloud Atlas"},{"id":9,"title":"Red Harbor"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
