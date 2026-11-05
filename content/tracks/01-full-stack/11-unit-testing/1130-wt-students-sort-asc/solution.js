test('does not mutate the input', () => {
  const before = JSON.stringify(STUDENTS);
  studentsByScore(STUDENTS);
  expect(JSON.stringify(STUDENTS)).toBe(before);
});

test("all students", () => {
  expect(studentsByScore(STUDENTS)).toEqual(["Luca","Bilal","Femi","Jonah","Dara","Keiko","Hugo","Amara"]);
});
