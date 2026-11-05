test('classifies tests', () => {
  const runs = [
    { 'login works': 'pass', 'checkout total': 'fail', 'date header': 'pass', 'search': 'fail' },
    { 'login works': 'pass', 'checkout total': 'fail', 'date header': 'fail', 'search': 'fail' },
    { 'login works': 'pass', 'checkout total': 'fail', 'date header': 'pass', 'search': 'pass' },
  ];
  expect(analyzeRuns(runs)).toEqual({ flaky: ['date header', 'search'], broken: ['checkout total'], healthy: ['login works'] });
});
test('tests missing from some runs', () => {
  expect(analyzeRuns([{ a: 'pass' }, { b: 'fail' }, { a: 'pass', b: 'fail' }])).toEqual({ flaky: [], broken: ['b'], healthy: ['a'] });
});
test('no runs', () => expect(analyzeRuns([])).toEqual({ flaky: [], broken: [], healthy: [] }));
