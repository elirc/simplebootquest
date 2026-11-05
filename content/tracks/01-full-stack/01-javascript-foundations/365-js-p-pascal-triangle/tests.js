test('first rows', () => expect(pascal(4)).toEqual([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1]]));
test('row 6', () => expect(pascal(7)[6]).toEqual([1, 6, 15, 20, 15, 6, 1]));
test('zero rows', () => expect(pascal(0)).toEqual([]));
