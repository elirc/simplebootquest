test('base64url has no padding or unsafe characters', () => {
  expect(base64url(new Uint8Array([251, 255, 191]))).toBe('-_-_');
  expect(base64urlJson({ a: 1 })).toBe('eyJhIjoxfQ');
});

test('sign produces a standard HS256 JWT', async () => {
  const token = await sign({ sub: 1 }, 'secret');
  expect(token.split('.')).toHaveLength(3);
  expect(token.startsWith('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.')).toBe(true);
  expect(token).toBe('eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjF9.ZA3enVRKELUD-0rnVN2V4ydOfb_Z-yxEKwulK53o1aY');
});

test('verify accepts valid tokens', async () => {
  const token = await sign({ sub: 'ada', exp: 2000 }, 'k');
  expect(await verify(token, 'k', 1000)).toEqual({ sub: 'ada', exp: 2000 });
});

test('verify rejects tampering, wrong secrets and expiry', async () => {
  const token = await sign({ sub: 'ada', role: 'member', exp: 2000 }, 'k');
  const [h, , s] = token.split('.');
  const forged = `${h}.${base64urlJson({ sub: 'ada', role: 'admin', exp: 2000 })}.${s}`;
  await expect(verify(forged, 'k', 1000)).rejects.toThrow('Invalid token');
  await expect(verify(token, 'wrong', 1000)).rejects.toThrow('Invalid token');
  await expect(verify(token, 'k', 2000)).rejects.toThrow('Token expired');
  await expect(verify('a.b', 'k', 1)).rejects.toThrow('Invalid token');
});
