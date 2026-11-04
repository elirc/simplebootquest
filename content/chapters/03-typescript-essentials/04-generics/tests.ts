const people = [
  { id: 1, name: 'Ada', team: 'core' },
  { id: 2, name: 'Linus', team: 'kernel' },
  { id: 3, name: 'Grace', team: 'core' },
];

test('groups by key', () => {
  const groups = groupBy(people, (p) => p.team);
  expect(groups.core.map((p) => p.name)).toEqual(['Ada', 'Grace']);
  expect(groups.kernel).toHaveLength(1);
});

test('groups numbers by parity', () => {
  expect(groupBy([1, 2, 3, 4, 5], (n) => (n % 2 === 0 ? 'even' : 'odd'))).toEqual({ odd: [1, 3, 5], even: [2, 4] });
});

test('removes duplicates keeping the first', () => {
  expect(uniqueBy(people, (p) => p.team).map((p) => p.name)).toEqual(['Ada', 'Linus']);
  expect(uniqueBy(['a', 'A', 'b'], (s) => s.toLowerCase())).toEqual(['a', 'b']);
});

test('indexes by id', () => {
  const index = indexById(people);
  expect(index).toBeInstanceOf(Map);
  expect(index.get(3).name).toBe('Grace');
  expect(index.size).toBe(3);
});
