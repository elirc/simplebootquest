const a = [1, 2, 2, 3, 4];
const b = [3, 4, 5, 5];
test('union', () => expect(union(a, b)).toEqual([1, 2, 3, 4, 5]));
test('intersection', () => expect(intersection(a, b)).toEqual([3, 4]));
test('difference', () => expect(difference(a, b)).toEqual([1, 2]));
test('symmetricDifference', () => expect(symmetricDifference(a, b)).toEqual([1, 2, 5]));
