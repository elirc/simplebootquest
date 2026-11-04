const students = [
  { name: 'Grace', scores: [80, 85, 82] },
  { name: 'Ada', scores: [95, 90, 100] },
  { name: 'Linus', scores: [50, 40] },
  { name: 'Alan', scores: [85, 80, 82] },
];

test('rows are averaged, graded and sorted', () => {
  expect(report(students).rows).toEqual([
    { name: 'Ada', average: 95, grade: 'A' },
    { name: 'Alan', average: 82.3, grade: 'B' },
    { name: 'Grace', average: 82.3, grade: 'B' },
    { name: 'Linus', average: 45, grade: 'F' },
  ]);
});

test('summary fields', () => {
  const r = report(students);
  expect(r.classAverage).toBe(76.2);
  expect(r.top).toBe('Ada');
  expect(r.distribution).toEqual({ A: 1, B: 2, C: 0, D: 0, F: 1 });
});

test('edge cases', () => {
  expect(report([])).toEqual({ rows: [], classAverage: 0, top: null, distribution: { A: 0, B: 0, C: 0, D: 0, F: 0 } });
  expect(report([{ name: 'New', scores: [] }]).rows[0]).toEqual({ name: 'New', average: 0, grade: 'F' });
});
