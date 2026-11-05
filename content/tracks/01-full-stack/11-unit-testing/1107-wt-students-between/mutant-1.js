// mutant: boundary: `>=` became `>`
const STUDENTS = [
  {id: 1, name: "Keiko", score: 66, age: 19, course: "web", graduated: true},
  {id: 2, name: "Bilal", score: 67, age: 27, course: "web", graduated: true},
  {id: 3, name: "Chen", score: 52, age: 31, course: "data", graduated: true},
  {id: 4, name: "Femi", score: 81, age: 33, course: "web", graduated: false},
  {id: 5, name: "Jonah", score: 93, age: 31, course: "data", graduated: false},
  {id: 6, name: "Gita", score: 43, age: 27, course: "web", graduated: false},
  {id: 7, name: "Elif", score: 76, age: 28, course: "web", graduated: false},
  {id: 8, name: "Amara", score: 63, age: 26, course: "data", graduated: false}
];

function studentsInRange(students, low, high) {
  return students.filter((x) => x.age > low && x.age <= high).map((x) => x.name);
}
