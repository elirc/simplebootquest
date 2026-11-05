const STUDENTS = [
  {id: 1, name: "Dara", score: 37, age: 33, course: "web", graduated: false},
  {id: 2, name: "Keiko", score: 87, age: 32, course: "data", graduated: true},
  {id: 3, name: "Amara", score: 85, age: 25, course: "web", graduated: false},
  {id: 4, name: "Hugo", score: 93, age: 22, course: "data", graduated: true},
  {id: 5, name: "Femi", score: 63, age: 30, course: "design", graduated: false},
  {id: 6, name: "Ines", score: 86, age: 27, course: "web", graduated: false},
  {id: 7, name: "Chen", score: 64, age: 26, course: "web", graduated: false},
  {id: 8, name: "Luca", score: 80, age: 19, course: "design", graduated: true}
];

test("with \"ar\"", () => {
  expect(searchStudents(STUDENTS, "ar")).toEqual(["Dara","Amara"]);
});

test("with \"AR\"", () => {
  expect(searchStudents(STUDENTS, "AR")).toEqual(["Dara","Amara"]);
});

test("with \"  \"", () => {
  expect(searchStudents(STUDENTS, "  ")).toEqual(["Dara","Keiko","Amara","Hugo","Femi","Ines","Chen","Luca"]);
});

test("with \"zzz\"", () => {
  expect(searchStudents(STUDENTS, "zzz")).toEqual([]);
});
