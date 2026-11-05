const FILE = [
  '# app config',
  '',
  'PORT=3000',
  'export NODE_ENV=production   # set by deploy',
  'DATABASE_URL="postgres://u:p@host/db?sslmode=require"',
  "GREETING='literal \\n here'",
  'MULTI="line one\\nline two"',
  'QUOTE="say \\"hi\\""',
  'EMPTY=',
  'TOKEN=abc#123',
  '1BAD=x',
  'not a pair',
  'PORT=4000',
].join('\n');
test('parses the file', () => {
  expect(parseEnv(FILE)).toEqual({
    PORT: '4000',
    NODE_ENV: 'production',
    DATABASE_URL: 'postgres://u:p@host/db?sslmode=require',
    GREETING: 'literal \\n here',
    MULTI: 'line one\nline two',
    QUOTE: 'say "hi"',
    EMPTY: '',
    TOKEN: 'abc#123',
  });
});
test('handles CRLF line endings', () => expect(parseEnv('A=1\r\nB=2\r\n')).toEqual({ A: '1', B: '2' }));
test('values keep = signs', () => expect(parseEnv('SECRET=a=b=c')).toEqual({ SECRET: 'a=b=c' }));
