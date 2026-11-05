test("with 27, 28", () => {
  expect(studentsInRange(STUDENTS, 27, 28)).toEqual(["Bilal","Gita","Elif"]);
});

test("with 28, 31", () => {
  expect(studentsInRange(STUDENTS, 28, 31)).toEqual(["Chen","Jonah","Elif"]);
});

test("with 27, 27", () => {
  expect(studentsInRange(STUDENTS, 27, 27)).toEqual(["Bilal","Gita"]);
});
