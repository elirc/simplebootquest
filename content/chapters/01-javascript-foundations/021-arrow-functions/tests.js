test('double', () => expect(double(21)).toBe(42));

test('isEven', () => {
  expect(isEven(4)).toBe(true);
  expect(isEven(7)).toBe(false);
});

test('makeUser returns an object', () => {
  expect(makeUser('Ada', 36)).toEqual({ name: 'Ada', age: 36, isAdult: true });
  expect(makeUser('Kid', 9).isAdult).toBe(false);
});

test('applyTwice', () => {
  expect(applyTwice(double, 3)).toBe(12);
  expect(applyTwice((s) => s + '!', 'hi')).toBe('hi!!');
});
