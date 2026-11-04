function setup() {
  let t = new Date('2026-03-01T00:00:00Z');
  const repo = createSoftDeleteRepo(() => t);
  const advanceDays = (d) => (t = new Date(t.getTime() + d * 86400000));
  return { repo, advanceDays };
}

test('removed records disappear from normal queries', () => {
  const { repo } = setup();
  repo.create({ title: 'a' });
  repo.create({ title: 'b' });
  expect(repo.remove(1)).toBe(true);
  expect(repo.remove(1)).toBe(false);
  expect(repo.findAll().map((r) => r.title)).toEqual(['b']);
  expect(repo.findById(1)).toBeUndefined();
});

test('restore within 30 days', () => {
  const { repo, advanceDays } = setup();
  repo.create({ title: 'a' });
  repo.remove(1);
  advanceDays(10);
  expect(repo.restore(1)).toBe(true);
  expect(repo.findById(1).title).toBe('a');
  expect(repo.restore(1)).toBe(false);
});

test('trash order and purge', () => {
  const { repo, advanceDays } = setup();
  ['a', 'b', 'c'].forEach((title) => repo.create({ title }));
  repo.remove(1);
  advanceDays(20);
  repo.remove(2);
  expect(repo.trash().map((r) => r.title)).toEqual(['b', 'a']);
  advanceDays(15);
  expect(repo.restore(1)).toBe(false);
  expect(repo.purge()).toBe(1);
  expect(repo.trash().map((r) => r.title)).toEqual(['b']);
  expect(repo.findAll().map((r) => r.title)).toEqual(['c']);
});
