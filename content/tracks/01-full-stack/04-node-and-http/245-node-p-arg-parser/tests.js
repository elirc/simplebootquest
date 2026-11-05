test('positional only', () => expect(parseArgs(['build', 'src'])).toEqual({ flags: {}, positional: ['build', 'src'] }));
test('flag with a value', () => expect(parseArgs(['--out', 'dist'])).toEqual({ flags: { out: 'dist' }, positional: [] }));
test('equals syntax', () => expect(parseArgs(['--mode=prod', '--url=a=b'])).toEqual({ flags: { mode: 'prod', url: 'a=b' }, positional: [] }));
test('boolean flags', () => expect(parseArgs(['--minify', '-v'])).toEqual({ flags: { minify: true, v: true }, positional: [] }));
test('negation', () => expect(parseArgs(['--no-color'])).toEqual({ flags: { color: false }, positional: [] }));
test('short flag with value', () => expect(parseArgs(['-o', 'out.txt', 'input.txt'])).toEqual({ flags: { o: 'out.txt' }, positional: ['input.txt'] }));
test('double dash', () => expect(parseArgs(['run', '--', '--not-a-flag', 'x'])).toEqual({ flags: {}, positional: ['run', '--not-a-flag', 'x'] }));
test('everything together', () => {
  expect(parseArgs(['build', 'src', '--out', 'dist', '--minify', '-v', '--mode=prod'])).toEqual({
    flags: { out: 'dist', minify: true, v: true, mode: 'prod' },
    positional: ['build', 'src'],
  });
});
