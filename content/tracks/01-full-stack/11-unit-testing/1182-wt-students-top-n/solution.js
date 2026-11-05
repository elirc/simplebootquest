test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  topStudentsByScore(STUDENTS, 1);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("with 1", () => {
  expect(topStudentsByScore(STUDENTS, 1)).toEqual(["Keiko"]);
});

test("with 3", () => {
  expect(topStudentsByScore(STUDENTS, 3)).toEqual(["Keiko","Chen","Amara"]);
});

test("with 0", () => {
  expect(topStudentsByScore(STUDENTS, 0)).toEqual([]);
});
