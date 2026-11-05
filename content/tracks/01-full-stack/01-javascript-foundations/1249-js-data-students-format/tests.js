const STUDENTS = [
  {id: 1, name: "Elif", score: 99, age: 32, course: "web", graduated: true},
  {id: 2, name: "Jonah", score: 79, age: 24, course: "web", graduated: false},
  {id: 3, name: "Gita", score: 34, age: 19, course: "web", graduated: false},
  {id: 4, name: "Bilal", score: 43, age: 27, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 95, age: 25, course: "web", graduated: false},
  {id: 6, name: "Hugo", score: 63, age: 26, course: "design", graduated: true},
  {id: 7, name: "Keiko", score: 96, age: 24, course: "data", graduated: true},
  {id: 8, name: "Femi", score: 93, age: 18, course: "data", graduated: false}
];

test("an empty list", () => {
  expect(describeStudents([])).toEqual([]);
});

test("all students", () => {
  expect(describeStudents(STUDENTS)).toEqual(["Elif (32)","Jonah (24)","Gita (19)","Bilal (27)","Dara (25)","Hugo (26)","Keiko (24)","Femi (18)"]);
});
