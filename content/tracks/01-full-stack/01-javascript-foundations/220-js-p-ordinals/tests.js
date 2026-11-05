test('basic', () => expect([1, 2, 3, 4, 10].map(ordinal)).toEqual(['1st', '2nd', '3rd', '4th', '10th']));
test('teens', () => expect([11, 12, 13].map(ordinal)).toEqual(['11th', '12th', '13th']));
test('larger', () => expect([21, 22, 23, 101, 111, 112, 0].map(ordinal)).toEqual(['21st', '22nd', '23rd', '101st', '111th', '112th', '0th']));
