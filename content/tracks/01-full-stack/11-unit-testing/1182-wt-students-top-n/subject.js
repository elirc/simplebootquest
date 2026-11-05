const STUDENTS = [
  {id: 1, name: "Chen", score: 93, age: 30, course: "web", graduated: true},
  {id: 2, name: "Keiko", score: 98, age: 25, course: "data", graduated: false},
  {id: 3, name: "Amara", score: 91, age: 19, course: "web", graduated: false},
  {id: 4, name: "Elif", score: 33, age: 18, course: "web", graduated: false},
  {id: 5, name: "Gita", score: 89, age: 20, course: "data", graduated: false},
  {id: 6, name: "Dara", score: 35, age: 25, course: "web", graduated: false},
  {id: 7, name: "Ines", score: 52, age: 20, course: "web", graduated: false},
  {id: 8, name: "Jonah", score: 52, age: 18, course: "web", graduated: true}
];

function topStudentsByScore(students, n) {
  return [...students].sort((a, b) => b.score - a.score).slice(0, n).map((x) => x.name);
}
