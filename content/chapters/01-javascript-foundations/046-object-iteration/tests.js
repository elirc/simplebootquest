const stock = { plums: 12, apples: 5, pears: 0 };

test('totalStock', () => {
  expect(totalStock(stock)).toBe(17);
  expect(totalStock({})).toBe(0);
});

test('inStock', () => {
  expect(inStock(stock)).toEqual(['apples', 'plums']);
});

test('mapValues', () => {
  expect(mapValues({ a: 1, b: 2 }, (v) => v * 10)).toEqual({ a: 10, b: 20 });
  expect(mapValues({ x: 1 }, (v, k) => k + v)).toEqual({ x: 'x1' });
});

test('filterObject', () => {
  expect(filterObject(stock, (v) => v >= 5)).toEqual({ plums: 12, apples: 5 });
  expect(filterObject({ id: 1, _secret: 2 }, (v, k) => !k.startsWith('_'))).toEqual({ id: 1 });
});
