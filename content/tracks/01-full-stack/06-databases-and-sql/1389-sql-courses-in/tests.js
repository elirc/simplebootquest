test('returns the expected rows', () => {
  expect(result).toEqual([{"id":1,"title":"React Basics"},{"id":3,"title":"Git Essentials"},{"id":5,"title":"GraphQL"},{"id":6,"title":"CSS Layouts"},{"id":7,"title":"Intro to SQL"},{"id":8,"title":"Web Security"},{"id":9,"title":"Testing JS"}]);
});

test('uses IN', () => {
  expect(/\bin\s*\(/i.test(code)).toBe(true);
});
