const STUDENTS = [
  {id: 1, name: "Hugo", score: 47, age: 20, course: "design", graduated: true},
  {id: 2, name: "Femi", score: 45, age: 17, course: "design", graduated: true},
  {id: 3, name: "Elif", score: 36, age: 27, course: "web", graduated: true},
  {id: 4, name: "Gita", score: 61, age: 25, course: "web", graduated: true},
  {id: 5, name: "Ines", score: 92, age: 17, course: "data", graduated: false},
  {id: 6, name: "Keiko", score: 68, age: 25, course: "web", graduated: false},
  {id: 7, name: "Luca", score: 43, age: 34, course: "data", graduated: false},
  {id: 8, name: "Chen", score: 38, age: 24, course: "data", graduated: true}
];

test("with 1", () => {
  expect(nthByAge(STUDENTS, 1)).toEqual("Luca");
});

test("with 2", () => {
  expect(nthByAge(STUDENTS, 2)).toEqual("Elif");
});

test("with 5", () => {
  expect(nthByAge(STUDENTS, 5)).toEqual("Chen");
});

test("with 0", () => {
  expect(nthByAge(STUDENTS, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAge(STUDENTS, 99)).toEqual(null);
});
