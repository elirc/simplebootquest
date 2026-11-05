// mutant: empty check is wrong
const STUDENTS = [
  {id: 1, name: "Gita", score: 43, age: 28, course: "web", graduated: true},
  {id: 2, name: "Elif", score: 59, age: 24, course: "data", graduated: true},
  {id: 3, name: "Ines", score: 50, age: 29, course: "data", graduated: false},
  {id: 4, name: "Keiko", score: 61, age: 30, course: "data", graduated: false},
  {id: 5, name: "Jonah", score: 100, age: 25, course: "web", graduated: false},
  {id: 6, name: "Dara", score: 60, age: 21, course: "design", graduated: false},
  {id: 7, name: "Bilal", score: 69, age: 31, course: "web", graduated: false},
  {id: 8, name: "Luca", score: 47, age: 30, course: "design", graduated: false}
];

function percentGraduated(students) {
  if (students.length === 1) return 0;
  return Math.round((students.filter((x) => x.graduated).length / students.length) * 100);
}
