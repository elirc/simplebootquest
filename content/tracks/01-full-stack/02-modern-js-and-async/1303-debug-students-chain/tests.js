const STUDENTS = [
  {id: 1, name: "Dara", score: 85, age: 19, course: "web", graduated: false},
  {id: 2, name: "Luca", score: 51, age: 19, course: "web", graduated: true},
  {id: 3, name: "Amara", score: 59, age: 22, course: "web", graduated: true},
  {id: 4, name: "Hugo", score: 38, age: 20, course: "web", graduated: false},
  {id: 5, name: "Chen", score: 88, age: 29, course: "design", graduated: false},
  {id: 6, name: "Jonah", score: 71, age: 31, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 33, age: 34, course: "design", graduated: false},
  {id: 8, name: "Bilal", score: 50, age: 19, course: "data", graduated: true}
];

test("with \"web\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "web")).toEqual(["Dara","Amara","Luca","Hugo"]);
});

test("with \"data\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "data")).toEqual(["Bilal"]);
});

test("with \"design\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "design")).toEqual(["Chen","Jonah","Ines"]);
});
