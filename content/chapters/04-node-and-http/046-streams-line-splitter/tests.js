test('handles lines split across chunks', () => {
  const lines = [];
  const s = createLineSplitter((l) => lines.push(l));
  s.write('first li');
  s.write('ne\nsecond line\nthi');
  s.write('rd');
  expect(lines).toEqual(['first line', 'second line']);
  s.end();
  expect(lines).toEqual(['first line', 'second line', 'third']);
});

test('strips CRLF and keeps empty lines', () => {
  const lines = [];
  const s = createLineSplitter((l) => lines.push(l));
  s.write('a\r\n\r\nb\r\n');
  s.end();
  expect(lines).toEqual(['a', '', 'b']);
});

test('countErrors over an async iterable', async () => {
  async function* logFile() {
    yield 'INFO start\nERROR disk ';
    yield 'full\nINFO ok\nERR';
    yield 'OR again\n';
  }
  expect(await countErrors(logFile())).toBe(2);
});
