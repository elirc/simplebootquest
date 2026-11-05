const tasks = [{ done: true, owner: 1 }, { done: false, owner: 2 }, { done: true, owner: 1 }];
test('countBy', () => expect(countBy(tasks, (t) => (t.done ? 'done' : 'open'))).toEqual({ done: 2, open: 1 }));
test('groupByKey keeps key types', () => {
  const g = groupByKey(tasks, 'owner');
  expect(g.get(1)).toHaveLength(2);
  expect([...g.keys()]).toEqual([1, 2]);
  expect(groupByKey(tasks, 'done').get(false)).toHaveLength(1);
});
test('topKey', () => {
  expect(topKey({ a: 1, b: 3, c: 2 })).toBe('b');
  expect(topKey({})).toBeUndefined();
});
