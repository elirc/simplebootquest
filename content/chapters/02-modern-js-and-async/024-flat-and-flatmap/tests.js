test('allItems', () => {
  expect(allItems([{ items: ['a', 'b'] }, { items: [] }, { items: ['c'] }])).toEqual(['a', 'b', 'c']);
});

test('allTags', () => {
  expect(allTags([{ tags: ['node', 'js'] }, { tags: ['js', 'css'] }])).toEqual(['css', 'js', 'node']);
});

test('validEmails', () => {
  expect(validEmails([{ email: 'A@X.IO' }, {}, { email: '' }, { email: 'b@x.io' }])).toEqual(['a@x.io', 'b@x.io']);
});

test('expand', () => {
  expect(expand([{ name: 'pen', qty: 2 }, { name: 'cup', qty: 1 }, { name: 'x', qty: 0 }])).toEqual(['pen', 'pen', 'cup']);
});
