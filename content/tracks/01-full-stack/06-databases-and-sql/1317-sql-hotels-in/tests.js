test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Sea Breeze"},{"id":2,"name":"Pine Lodge"},{"id":3,"name":"Harbour View"},{"id":4,"name":"Maple House"},{"id":5,"name":"Sky Garden"},{"id":6,"name":"The Grand"},{"id":7,"name":"Olive Court"},{"id":8,"name":"Riverside Inn"},{"id":9,"name":"Old Mill"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
