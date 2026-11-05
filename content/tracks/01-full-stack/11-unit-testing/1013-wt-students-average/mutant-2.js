// mutant: rounding: `Math.round` became `Math.floor`
const STUDENTS = [
  {id: 1, name: "Gita", score: 78, age: 27, course: "data", graduated: false},
  {id: 2, name: "Bilal", score: 54, age: 24, course: "design", graduated: false},
  {id: 3, name: "Jonah", score: 68, age: 30, course: "design", graduated: false},
  {id: 4, name: "Keiko", score: 68, age: 27, course: "data", graduated: false},
  {id: 5, name: "Chen", score: 41, age: 30, course: "web", graduated: false},
  {id: 6, name: "Femi", score: 61, age: 30, course: "design", graduated: false},
  {id: 7, name: "Ines", score: 56, age: 30, course: "design", graduated: true},
  {id: 8, name: "Dara", score: 36, age: 23, course: "design", graduated: false}
];

function averageScore(students) {
  if (students.length === 0) return null;
  const total = students.reduce((sum, x) => sum + x.score, 0);
  return Math.floor((total / students.length) * 10) / 10;
}
