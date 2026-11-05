test('valid config', () => expect(validateConfig({ port: 3000, host: 'localhost', features: ['a'], retries: 0 })).toEqual([]));
test('every error, in order', () => {
  expect(validateConfig({ port: 0, host: ' ', features: [1], retries: -1, debug: true, verbose: 1 })).toEqual([
    'port must be an integer between 1 and 65535',
    'host is required',
    'features must be an array of strings',
    'retries must be a non-negative integer',
    'unknown key: debug',
    'unknown key: verbose',
  ]);
});
