test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"name":"Monitor Arm"},{"id":4,"name":"Notebook"},{"id":6,"name":"Desk Lamp"},{"id":7,"name":"Pen Set"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
