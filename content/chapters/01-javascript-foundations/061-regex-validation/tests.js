test('isHexColor', () => {
  for (const ok of ['#fff', '#A1B2C3', '#000000']) expect(isHexColor(ok)).toBe(true);
  for (const bad of ['fff', '#ffff', '#ggg', '#1234567', 'x#fff']) expect(isHexColor(bad)).toBe(false);
});

test('isUsername', () => {
  for (const ok of ['ada', 'Ada_Lovelace', 'a12']) expect(isUsername(ok)).toBe(true);
  for (const bad of ['ab', '1ada', 'ada!', 'a'.repeat(17), '_ada']) expect(isUsername(bad)).toBe(false);
});

test('parseDate', () => {
  expect(parseDate('2026-03-05')).toEqual({ year: 2026, month: 3, day: 5 });
  expect(parseDate('2026-3-5')).toBeNull();
  expect(parseDate('x2026-03-05')).toBeNull();
});

test('extractHashtags', () => {
  expect(extractHashtags('Learning #JavaScript and #node_js today! #100DaysOfCode')).toEqual(['javascript', 'node_js', '100daysofcode']);
  expect(extractHashtags('no tags')).toEqual([]);
});
