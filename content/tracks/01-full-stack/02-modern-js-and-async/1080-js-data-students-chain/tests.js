const STUDENTS = [
  {id: 1, name: "Keiko", score: 85, age: 22, course: "data", graduated: true},
  {id: 2, name: "Gita", score: 65, age: 28, course: "design", graduated: true},
  {id: 3, name: "Hugo", score: 80, age: 31, course: "design", graduated: false},
  {id: 4, name: "Amara", score: 59, age: 19, course: "data", graduated: false},
  {id: 5, name: "Ines", score: 73, age: 20, course: "data", graduated: false},
  {id: 6, name: "Chen", score: 74, age: 17, course: "data", graduated: false},
  {id: 7, name: "Luca", score: 66, age: 19, course: "web", graduated: false},
  {id: 8, name: "Femi", score: 96, age: 18, course: "web", graduated: false}
];

test("with \"web\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "web")).toEqual(["Femi","Luca"]);
});

test("with \"data\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "data")).toEqual(["Keiko","Chen","Ines","Amara"]);
});

test("with \"design\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "design")).toEqual(["Hugo","Gita"]);
});
