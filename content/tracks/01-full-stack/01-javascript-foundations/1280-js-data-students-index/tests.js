const STUDENTS = [
  {id: 1, name: "Ines", score: 94, age: 18, course: "data", graduated: true},
  {id: 2, name: "Chen", score: 88, age: 25, course: "design", graduated: true},
  {id: 3, name: "Amara", score: 61, age: 19, course: "web", graduated: false},
  {id: 4, name: "Luca", score: 44, age: 21, course: "web", graduated: false},
  {id: 5, name: "Jonah", score: 33, age: 28, course: "data", graduated: true},
  {id: 6, name: "Hugo", score: 91, age: 31, course: "data", graduated: true},
  {id: 7, name: "Bilal", score: 96, age: 19, course: "data", graduated: true},
  {id: 8, name: "Elif", score: 99, age: 19, course: "web", graduated: true}
];

test("an empty list", () => {
  expect(studentsById([])).toEqual({});
});

test("all students", () => {
  expect(studentsById(STUDENTS)).toEqual({"1":"Ines","2":"Chen","3":"Amara","4":"Luca","5":"Jonah","6":"Hugo","7":"Bilal","8":"Elif"});
});
