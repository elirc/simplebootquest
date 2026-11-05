test('renameKeys', () => {
  expect(renameKeys({ first_name: 'Ada', last_name: 'L', id: 1 }, { first_name: 'firstName', last_name: 'lastName' })).toEqual({ firstName: 'Ada', lastName: 'L', id: 1 });
});
test('invert', () => {
  expect(invert({ a: 'x', b: 'y' })).toEqual({ x: 'a', y: 'b' });
  expect(invert({ a: 'x', b: 'x' })).toEqual({ x: 'b' });
});
