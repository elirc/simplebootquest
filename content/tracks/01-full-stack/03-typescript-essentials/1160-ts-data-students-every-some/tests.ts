const STUDENTS = [
  {id: 1, name: "Dara", score: 39, age: 23, course: "web", graduated: false},
  {id: 2, name: "Amara", score: 90, age: 21, course: "web", graduated: true},
  {id: 3, name: "Luca", score: 37, age: 17, course: "data", graduated: false},
  {id: 4, name: "Chen", score: 80, age: 18, course: "design", graduated: true},
  {id: 5, name: "Gita", score: 67, age: 24, course: "design", graduated: true},
  {id: 6, name: "Keiko", score: 98, age: 18, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 60, age: 18, course: "design", graduated: true},
  {id: 8, name: "Jonah", score: 100, age: 19, course: "web", graduated: true}
];

test("with 60", () => {
  expect(allStudentsUnder(STUDENTS, 60)).toEqual(false);
});

test("with 101", () => {
  expect(allStudentsUnder(STUDENTS, 101)).toEqual(true);
});

test("with 100", () => {
  expect(allStudentsUnder(STUDENTS, 100)).toEqual(false);
});
