test('explicit range', () => expect(parseRange('bytes=0-99', 1000)).toEqual({ start: 0, end: 99 }));
test('open-ended range', () => expect(parseRange('bytes=900-', 1000)).toEqual({ start: 900, end: 999 }));
test('suffix range', () => expect(parseRange('bytes=-100', 1000)).toEqual({ start: 900, end: 999 }));
test('suffix larger than the file', () => expect(parseRange('bytes=-5000', 1000)).toEqual({ start: 0, end: 999 }));
test('end is clamped', () => expect(parseRange('bytes=500-5000', 1000)).toEqual({ start: 500, end: 999 }));
test('unsatisfiable', () => {
  expect(parseRange('bytes=1000-', 1000)).toBeNull();
  expect(parseRange('bytes=50-10', 1000)).toBeNull();
});
test('malformed', () => {
  expect(parseRange('items=0-5', 1000)).toBeNull();
  expect(parseRange('bytes=-', 1000)).toBeNull();
  expect(parseRange('bytes=abc', 1000)).toBeNull();
  expect(parseRange(undefined, 1000)).toBeNull();
});
