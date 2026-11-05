const STUDENTS = [
  {id: 1, name: "Hugo", score: 46, age: 22, course: "design", graduated: true},
  {id: 2, name: "Amara", score: 31, age: 28, course: "data", graduated: false},
  {id: 3, name: "Bilal", score: 64, age: 25, course: "web", graduated: true},
  {id: 4, name: "Elif", score: 54, age: 23, course: "web", graduated: false},
  {id: 5, name: "Ines", score: 88, age: 25, course: "design", graduated: false},
  {id: 6, name: "Gita", score: 77, age: 33, course: "design", graduated: false},
  {id: 7, name: "Dara", score: 38, age: 22, course: "data", graduated: true},
  {id: 8, name: "Luca", score: 97, age: 23, course: "design", graduated: true}
];

test("with 1, 3", () => {
  expect(pageOfStudents(STUDENTS, 1, 3)).toEqual({"items":["Hugo","Amara","Bilal"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfStudents(STUDENTS, 2, 3)).toEqual({"items":["Elif","Ines","Gita"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfStudents(STUDENTS, 3, 3)).toEqual({"items":["Dara","Luca"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfStudents(STUDENTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
