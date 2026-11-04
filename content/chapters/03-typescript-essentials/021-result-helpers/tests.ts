test('constructors', () => {
  expect(ok(1)).toEqual({ ok: true, value: 1 });
  expect(err('x')).toEqual({ ok: false, error: 'x' });
});

test('map and andThen', () => {
  expect(map(ok(2), (n) => n * 10)).toEqual(ok(20));
  expect(map(err('bad'), (n) => n * 10)).toEqual(err('bad'));
  expect(andThen(ok(2), (n) => (n > 1 ? ok('big') : err('small')))).toEqual(ok('big'));
  expect(andThen(err('e'), () => ok(1))).toEqual(err('e'));
});

test('unwrapOr', () => {
  expect(unwrapOr(ok(5), 0)).toBe(5);
  expect(unwrapOr(err('x'), 0)).toBe(0);
});

test('parsePort', () => {
  expect(parsePort('8080')).toEqual(ok(8080));
  expect(parsePort('abc')).toEqual(err('not a number'));
  expect(parsePort('70000')).toEqual(err('out of range'));
  expect(parsePort('0')).toEqual(err('out of range'));
});
