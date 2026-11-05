test('mixed coins', () => expect(makeChange(287)).toEqual({ 200: 1, 50: 1, 20: 1, 10: 1, 5: 1, 2: 1 }));
test('repeats coins', () => expect(makeChange(400)).toEqual({ 200: 2 }));
test('small amounts', () => expect(makeChange(4)).toEqual({ 2: 2 }));
test('zero', () => expect(makeChange(0)).toEqual({}));
