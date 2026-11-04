test('positional and long flags', () => {
  expect(parseArgs(['add', 'Buy milk', '--tag', 'shopping', '--urgent'])).toEqual({
    positional: ['add', 'Buy milk'],
    flags: { tag: 'shopping', urgent: true },
  });
});

test('--name=value and short flags', () => {
  expect(parseArgs(['--port=8080', '-vx', 'serve'])).toEqual({ positional: ['serve'], flags: { port: '8080', v: true, x: true } });
});

test('flag followed by another flag is boolean', () => {
  expect(parseArgs(['--dry-run', '--force'])).toEqual({ positional: [], flags: { 'dry-run': true, force: true } });
});

test('-- ends flag parsing', () => {
  expect(parseArgs(['run', '--', '--not-a-flag', '-x'])).toEqual({ positional: ['run', '--not-a-flag', '-x'], flags: {} });
});
