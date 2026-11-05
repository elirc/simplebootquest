// mutant: sort direction reversed
const STUDENTS = [
  {id: 1, name: "Luca", score: 46, age: 32, course: "design", graduated: true},
  {id: 2, name: "Jonah", score: 61, age: 23, course: "design", graduated: true},
  {id: 3, name: "Keiko", score: 73, age: 23, course: "design", graduated: true},
  {id: 4, name: "Femi", score: 56, age: 21, course: "web", graduated: false},
  {id: 5, name: "Dara", score: 71, age: 19, course: "web", graduated: true},
  {id: 6, name: "Hugo", score: 84, age: 32, course: "web", graduated: false},
  {id: 7, name: "Bilal", score: 48, age: 25, course: "web", graduated: true},
  {id: 8, name: "Amara", score: 84, age: 28, course: "web", graduated: true}
];

function studentsByScore(students) {
  return [...students].sort((a, b) => b.score - a.score).map((x) => x.name);
}
