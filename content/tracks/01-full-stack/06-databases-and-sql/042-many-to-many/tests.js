test('tags per post', () => {
  expect(result).toEqual([
    { title: 'CSS Grid', tags: 'css' },
    { title: 'Hello SQL', tags: 'databases,sql' },
    { title: 'Node Streams', tags: 'js,node' },
    { title: 'Untagged', tags: '' },
  ]);
});
