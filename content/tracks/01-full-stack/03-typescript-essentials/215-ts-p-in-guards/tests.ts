test('describeActor', () => {
  expect(describeActor({ email: 'a@x.io', permissions: ['x', 'y'] })).toBe('admin:a@x.io:2');
  expect(describeActor({ email: 'u@x.io' })).toBe('user:u@x.io');
  expect(describeActor({ sessionId: 's1' })).toBe('guest:s1');
});
test('toUserMessage', () => {
  expect(toUserMessage(new TypeError('x'))).toBe('Something was the wrong type');
  expect(toUserMessage(new RangeError('x'))).toBe('A value was out of range');
  expect(toUserMessage(new Error('Disk full'))).toBe('Disk full');
  expect(toUserMessage('oops')).toBe('Unknown error');
});
