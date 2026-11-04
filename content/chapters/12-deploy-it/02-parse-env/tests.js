const sample = `
# Database
DATABASE_URL=postgresql://app:app@localhost:5432/app?schema=public
  JWT_SECRET = "a long random string"
PORT=3001 # the api port
export NODE_ENV=development
GREETING='Hello # not a comment'
MULTI="line1\\nline2"
EMPTY=
NOEQUALS
PORT=4000
`;

test('parses keys and values', () => {
  const env = parseEnv(sample);
  expect(env.DATABASE_URL).toBe('postgresql://app:app@localhost:5432/app?schema=public');
  expect(env.NODE_ENV).toBe('development');
  expect(env.EMPTY).toBe('');
});

test('handles quotes', () => {
  const env = parseEnv(sample);
  expect(env.JWT_SECRET).toBe('a long random string');
  expect(env.GREETING).toBe('Hello # not a comment');
  expect(env.MULTI).toBe('line1\nline2');
});

test('strips inline comments and lets later keys win', () => {
  expect(parseEnv('A=1 # one').A).toBe('1');
  expect(parseEnv(sample).PORT).toBe('4000');
});

test('ignores comments, blanks and junk', () => {
  expect(Object.keys(parseEnv(sample)).sort()).toEqual(['DATABASE_URL', 'EMPTY', 'GREETING', 'JWT_SECRET', 'MULTI', 'NODE_ENV', 'PORT']);
});

test('keeps # without preceding whitespace', () => {
  expect(parseEnv('COLOR=#ff0000').COLOR).toBe('#ff0000');
});

test('serialises back to a file', () => {
  expect(toEnvFile({ PORT: 3001, MSG: 'hi there', TEXT: 'a\nb' })).toBe('PORT=3001\nMSG="hi there"\nTEXT="a\\nb"');
});

test('round-trips', () => {
  const original = { A: 'x', B: 'with space', C: 'has # hash', D: 'multi\nline' };
  expect(parseEnv(toEnvFile(original))).toEqual(original);
});
