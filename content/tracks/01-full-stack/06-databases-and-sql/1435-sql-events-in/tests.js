test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Open Mic"},{"id":3,"name":"Code Dojo"},{"id":4,"name":"Startup Night"},{"id":6,"name":"Design Jam"},{"id":7,"name":"AI Panel"},{"id":8,"name":"Game Night"},{"id":9,"name":"JS Meetup"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
