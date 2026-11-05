const ITEMS = [
  { id: 1, at: '2026-03-01T09:00:00Z', text: 'Old thing' },
  { id: 2, at: '2026-03-10T08:00:00Z', text: 'Morning' },
  { id: 3, at: '2026-03-09T22:00:00Z', text: 'Late yesterday' },
  { id: 4, at: '2026-03-10T17:30:00Z', text: 'Evening' },
];
test('groups newest first', () => {
  const groups = groupByDay(ITEMS, '2026-03-10');
  expect(groups.map((g) => g.label)).toEqual(['Today', 'Yesterday', '2026-03-01']);
  expect(groups[0].items.map((i) => i.id)).toEqual([4, 2]);
});
test('yesterday across a month boundary', () => {
  expect(groupByDay([{ id: 1, at: '2026-02-28T12:00:00Z', text: 'x' }], '2026-03-01')[0].label).toBe('Yesterday');
});
test('does not mutate the input', () => {
  const copy = ITEMS.map((i) => i.id);
  groupByDay(ITEMS, '2026-03-10');
  expect(ITEMS.map((i) => i.id)).toEqual(copy);
});
test('renders headings and lists', () => {
  const el = render(<Feed items={ITEMS} today="2026-03-10" />);
  expect(findAll(el, 'h3').map(text)).toEqual(['Today', 'Yesterday', '2026-03-01']);
  expect(findAll(el, 'ul').map((ul) => findAll(ul, 'li').map(text))).toEqual([['Evening', 'Morning'], ['Late yesterday'], ['Old thing']]);
});
test('empty state', () => expect(text(render(<Feed items={[]} today="2026-03-10" />))).toBe('No activity yet'));
