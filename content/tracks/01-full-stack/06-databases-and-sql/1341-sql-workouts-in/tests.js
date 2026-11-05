test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"label":"Sat ride"},{"id":2,"label":"Sun walk"},{"id":3,"label":"Fri run"},{"id":4,"label":"Thu ride"},{"id":5,"label":"Thu yoga"},{"id":6,"label":"Wed swim"},{"id":7,"label":"Fri yoga"},{"id":8,"label":"Wed lift"},{"id":9,"label":"Tue swim"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
