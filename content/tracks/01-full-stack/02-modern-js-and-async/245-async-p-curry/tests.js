const volume = (l, w, h) => l * w * h;
test('partial', () => {
  const area = partial(volume, 2);
  expect(area(3, 4)).toBe(24);
});
test('curry', () => {
  const c = curry(volume);
  expect(c(2)(3)(4)).toBe(24);
  expect(c(2, 3)(4)).toBe(24);
  expect(c(2)(3, 4)).toBe(24);
  expect(c(2, 3, 4)).toBe(24);
});
