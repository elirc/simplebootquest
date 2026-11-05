const STUDENTS = [
  {id: 1, name: "Dara", score: 97, age: 31, course: "design", graduated: true},
  {id: 2, name: "Bilal", score: 98, age: 22, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 92, age: 31, course: "web", graduated: true},
  {id: 4, name: "Femi", score: 78, age: 19, course: "data", graduated: true},
  {id: 5, name: "Keiko", score: 34, age: 23, course: "web", graduated: true},
  {id: 6, name: "Chen", score: 59, age: 26, course: "web", graduated: false},
  {id: 7, name: "Gita", score: 58, age: 24, course: "web", graduated: false},
  {id: 8, name: "Jonah", score: 63, age: 21, course: "data", graduated: false}
];

test("an empty list", () => {
  expect(distinctCourses([])).toEqual([]);
});

test("all students", () => {
  expect(distinctCourses(STUDENTS)).toEqual(["data","design","web"]);
});
