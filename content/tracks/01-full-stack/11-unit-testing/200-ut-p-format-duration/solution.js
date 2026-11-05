describe('formatDuration', () => {
  test('formats hours, minutes and seconds', () => {
    expect(formatDuration(3723)).toBe('1h 2m 3s');
  });
  test('zero', () => expect(formatDuration(0)).toBe('0s'));
  test('omits zero parts', () => {
    expect(formatDuration(60)).toBe('1m');
    expect(formatDuration(3600)).toBe('1h');
    expect(formatDuration(3601)).toBe('1h 1s');
  });
  test('just below the boundaries', () => {
    expect(formatDuration(59)).toBe('59s');
    expect(formatDuration(3599)).toBe('59m 59s');
  });
  test('rejects invalid input', () => {
    expect(() => formatDuration(-1)).toThrow(RangeError);
    expect(() => formatDuration(1.5)).toThrow(RangeError);
  });
});
