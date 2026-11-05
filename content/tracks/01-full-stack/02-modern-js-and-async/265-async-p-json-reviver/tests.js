test('revives ISO dates at any depth', () => {
  const out = parseWithDates('{"createdAt":"2026-03-05T10:00:00.000Z","items":[{"at":"2026-01-01T00:00:00Z"}],"note":"2026-03-05"}');
  expect(out.createdAt).toBeInstanceOf(Date);
  expect(out.items[0].at.toISOString()).toBe('2026-01-01T00:00:00.000Z');
  expect(out.note).toBe('2026-03-05');
});
test('stringifySorted', () => expect(stringifySorted({ b: 1, a: { d: 2, c: [3, { z: 1, y: 2 }] } })).toBe('{"a":{"c":[3,{"y":2,"z":1}],"d":2},"b":1}'));
