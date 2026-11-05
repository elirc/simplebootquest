test('returns the expected rows', () => {
  expect(result).toEqual([{"status":"cancelled"},{"status":"paid"},{"status":"pending"},{"status":"shipped"}]);
});
