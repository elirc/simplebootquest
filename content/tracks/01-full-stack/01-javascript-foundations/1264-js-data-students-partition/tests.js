const STUDENTS = [
  {id: 1, name: "Chen", score: 95, age: 22, course: "design", graduated: false},
  {id: 2, name: "Keiko", score: 66, age: 33, course: "web", graduated: false},
  {id: 3, name: "Hugo", score: 61, age: 30, course: "design", graduated: true},
  {id: 4, name: "Ines", score: 31, age: 28, course: "design", graduated: false},
  {id: 5, name: "Bilal", score: 99, age: 28, course: "web", graduated: false},
  {id: 6, name: "Luca", score: 37, age: 22, course: "web", graduated: true},
  {id: 7, name: "Gita", score: 60, age: 33, course: "data", graduated: false},
  {id: 8, name: "Femi", score: 53, age: 25, course: "data", graduated: true}
];

test("an empty list", () => {
  expect(splitStudentsByGraduated([])).toEqual({"yes":[],"no":[]});
});

test("all students", () => {
  expect(splitStudentsByGraduated(STUDENTS)).toEqual({"yes":["Hugo","Luca","Femi"],"no":["Chen","Keiko","Ines","Bilal","Gita"]});
});
