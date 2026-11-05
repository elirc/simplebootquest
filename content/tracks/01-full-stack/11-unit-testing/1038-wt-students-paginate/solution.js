test("with 1, 3", () => {
  expect(pageOfStudents(STUDENTS, 1, 3)).toEqual({"items":["Ines","Dara","Elif"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfStudents(STUDENTS, 2, 3)).toEqual({"items":["Bilal","Femi","Luca"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfStudents(STUDENTS, 3, 3)).toEqual({"items":["Keiko","Gita"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfStudents(STUDENTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
