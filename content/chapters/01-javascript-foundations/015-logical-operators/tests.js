test('displayName falls back', () => {
  expect(displayName({ nickname: 'Ace', name: 'Ada' })).toBe('Ace');
  expect(displayName({ nickname: '', name: 'Ada' })).toBe('Ada');
  expect(displayName({})).toBe('Anonymous');
  expect(displayName(null)).toBe('Anonymous');
});

test('pageSize keeps 0', () => {
  expect(pageSize({ pageSize: 50 })).toBe(50);
  expect(pageSize({ pageSize: 0 })).toBe(0);
  expect(pageSize({})).toBe(20);
  expect(pageSize(undefined)).toBe(20);
});

test('cityOf', () => {
  expect(cityOf({ address: { city: 'London' } })).toBe('LONDON');
  expect(cityOf({ address: {} })).toBe('UNKNOWN');
  expect(cityOf({})).toBe('UNKNOWN');
  expect(cityOf(null)).toBe('UNKNOWN');
});
