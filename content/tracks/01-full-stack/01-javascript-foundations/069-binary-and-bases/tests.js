test('toBinary', () => {
  expect(toBinary(10)).toBe('1010');
  expect(toBinary(0)).toBe('0');
  expect(toBinary(255)).toBe('11111111');
});

test('hexToRgb', () => {
  expect(hexToRgb('#ff8800')).toEqual({ r: 255, g: 136, b: 0 });
});

test('rgbToHex pads bytes', () => {
  expect(rgbToHex({ r: 255, g: 136, b: 0 })).toBe('#ff8800');
  expect(rgbToHex({ r: 1, g: 2, b: 3 })).toBe('#010203');
});
