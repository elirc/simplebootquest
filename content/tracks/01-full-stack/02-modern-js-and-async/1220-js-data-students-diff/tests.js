const BEFORE = [
  {id: 1, name: "Hugo", score: 48, age: 31, course: "data", graduated: true},
  {id: 2, name: "Dara", score: 86, age: 25, course: "data", graduated: false},
  {id: 3, name: "Jonah", score: 54, age: 23, course: "web", graduated: true},
  {id: 4, name: "Amara", score: 51, age: 28, course: "web", graduated: false},
  {id: 5, name: "Luca", score: 47, age: 26, course: "web", graduated: true},
  {id: 6, name: "Bilal", score: 74, age: 21, course: "data", graduated: false},
  {id: 7, name: "Keiko", score: 59, age: 27, course: "design", graduated: true},
  {id: 8, name: "Femi", score: 64, age: 22, course: "data", graduated: true}
];
const AFTER = [
  {id: 1, name: "Hugo", score: 48, age: 31, course: "data", graduated: true},
  {id: 2, name: "Dara", score: 93, age: 25, course: "data", graduated: false},
  {id: 3, name: "Jonah", score: 54, age: 23, course: "web", graduated: true},
  {id: 4, name: "Amara", score: 51, age: 28, course: "web", graduated: false},
  {id: 5, name: "Luca", score: 54, age: 26, course: "web", graduated: true},
  {id: 6, name: "Bilal", score: 74, age: 21, course: "data", graduated: false},
  {id: 7, name: "Keiko", score: 59, age: 27, course: "design", graduated: true},
  {id: 8, name: "Femi", score: 71, age: 22, course: "data", graduated: true}
];

test("finds changed ids", () => {
  expect(scoreChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(scoreChanges(BEFORE, BEFORE)).toEqual([]);
});
