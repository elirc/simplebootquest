describe('parseQuantity', () => {
  test('parses whole numbers and trims whitespace', () => {
    expect(parseQuantity('3')).toBe(3);
    expect(parseQuantity('  12 ')).toBe(12);
  });

  test('accepts the boundaries 1 and 99', () => {
    expect(parseQuantity('1')).toBe(1);
    expect(parseQuantity('99')).toBe(99);
  });

  test('rejects non-numbers with a TypeError', () => {
    for (const bad of ['', 'abc', '2.5', '1e2']) {
      expect(() => parseQuantity(bad)).toThrow(TypeError);
      expect(() => parseQuantity(bad)).toThrow('Quantity must be a whole number');
    }
  });

  test('rejects out-of-range numbers with a RangeError', () => {
    for (const bad of ['0', '100', '-5']) {
      expect(() => parseQuantity(bad)).toThrow(RangeError);
      expect(() => parseQuantity(bad)).toThrow('between 1 and 99');
    }
  });
});
