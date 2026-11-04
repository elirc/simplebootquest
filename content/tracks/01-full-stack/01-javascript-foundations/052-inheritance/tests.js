test('rectangle', () => {
  const r = new Rectangle(2, 3);
  expect(r.area()).toBe(6);
  expect(r.describe()).toBe('rectangle with area 6.00');
});

test('square inherits from rectangle and shape', () => {
  const s = new Square(4);
  expect(s.area()).toBe(16);
  expect(s.describe()).toBe('square with area 16.00');
  expect(s).toBeInstanceOf(Rectangle);
  expect(s).toBeInstanceOf(Shape);
});

test('base shape', () => {
  expect(new Shape('blob').describe()).toBe('blob with area 0.00');
});

test('ValidationError', () => {
  const err = new ValidationError('email');
  expect(err).toBeInstanceOf(Error);
  expect(err.name).toBe('ValidationError');
  expect(err.field).toBe('email');
  expect(err.message).toBe('email is invalid');
});
