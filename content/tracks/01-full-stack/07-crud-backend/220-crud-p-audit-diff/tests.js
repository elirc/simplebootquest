test('changed fields', () => {
  expect(diff({ id: 1, title: 'a', price: 100 }, { id: 1, title: 'b', price: 120 })).toEqual([
    { field: 'price', from: 100, to: 120 },
    { field: 'title', from: 'a', to: 'b' },
  ]);
});
test('ignores updatedAt by default', () => expect(diff({ a: 1, updatedAt: 'x' }, { a: 1, updatedAt: 'y' })).toEqual([]));
test('custom ignore', () => expect(diff({ a: 1, b: 1 }, { a: 2, b: 2 }, { ignore: ['b'] })).toEqual([{ field: 'a', from: 1, to: 2 }]));
test('added and removed keys', () => expect(diff({ a: 1 }, { b: 2 })).toEqual([
  { field: 'a', from: 1, to: undefined },
  { field: 'b', from: undefined, to: 2 },
]));
test('dates and arrays compare by value', () => {
  expect(diff({ due: new Date('2026-01-01'), tags: ['x'] }, { due: new Date('2026-01-01'), tags: ['x'] })).toEqual([]);
  expect(diff({ tags: ['x'] }, { tags: ['x', 'y'] })).toEqual([{ field: 'tags', from: ['x'], to: ['x', 'y'] }]);
});
test('null vs undefined is a change', () => expect(diff({ a: null }, {})).toEqual([{ field: 'a', from: null, to: undefined }]));
