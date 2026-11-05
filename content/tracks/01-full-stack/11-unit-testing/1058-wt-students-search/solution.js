test("with \"he\"", () => {
  expect(searchStudents(STUDENTS, "he")).toEqual(["Chen"]);
});

test("with \"HE\"", () => {
  expect(searchStudents(STUDENTS, "HE")).toEqual(["Chen"]);
});

test("with \"  \"", () => {
  expect(searchStudents(STUDENTS, "  ")).toEqual(["Bilal","Ines","Luca","Dara","Elif","Keiko","Femi","Chen"]);
});

test("with \"zzz\"", () => {
  expect(searchStudents(STUDENTS, "zzz")).toEqual([]);
});
