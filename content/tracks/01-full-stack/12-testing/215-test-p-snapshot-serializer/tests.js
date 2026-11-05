test('primitives', () => {
  expect([1, 'hi', true, null, undefined].map((v) => serialize(v))).toEqual(['1', '"hi"', 'true', 'null', 'undefined']);
});
test('dates and functions', () => {
  expect(serialize(new Date('2026-01-01T00:00:00Z'))).toBe('Date(2026-01-01T00:00:00.000Z)');
  expect(serialize(function save() {})).toBe('[Function save]');
  expect(serialize(Object.defineProperty(() => {}, 'name', { value: '' }))).toBe('[Function anonymous]');
});
test('empty containers', () => {
  expect(serialize([])).toBe('[]');
  expect(serialize({})).toBe('{}');
});
test('sorted keys, nested indentation', () => {
  expect(serialize({ b: 1, a: [true, { y: 'z' }], 'content-type': 'json' })).toBe(
    '{\n  a: [\n    true,\n    {\n      y: "z",\n    },\n  ],\n  b: 1,\n  "content-type": "json",\n}',
  );
});
test('stable regardless of key order', () => expect(serialize({ x: 1, y: 2 })).toBe(serialize({ y: 2, x: 1 })));
