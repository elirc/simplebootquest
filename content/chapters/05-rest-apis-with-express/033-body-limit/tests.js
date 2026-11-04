test('parseSize', () => {
  expect(parseSize('512')).toBe(512);
  expect(parseSize('100b')).toBe(100);
  expect(parseSize('10KB')).toBe(10240);
  expect(parseSize('1.5mb')).toBe(1572864);
  expect(parseSize('2gb')).toBe(2147483648);
  expect(() => parseSize('lots')).toThrow();
  expect(() => parseSize('10tb')).toThrow();
});

test('bodyLimit', () => {
  const mw = bodyLimit('1kb');
  const big = mockRes();
  let calls = 0;
  mw({ headers: { 'content-length': '2048' } }, big, () => calls++);
  expect(big.statusCode).toBe(413);
  expect(big.body).toEqual({ error: 'Request body too large', limit: 1024 });
  mw({ headers: { 'content-length': '1024' } }, mockRes(), () => calls++);
  mw({ headers: {} }, mockRes(), () => calls++);
  expect(calls).toBe(2);
});
