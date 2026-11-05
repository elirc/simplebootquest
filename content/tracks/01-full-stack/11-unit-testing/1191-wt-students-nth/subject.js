const STUDENTS = [
  {id: 1, name: "Jonah", score: 43, age: 19, course: "design", graduated: false},
  {id: 2, name: "Luca", score: 96, age: 19, course: "web", graduated: true},
  {id: 3, name: "Hugo", score: 83, age: 28, course: "web", graduated: true},
  {id: 4, name: "Femi", score: 68, age: 20, course: "data", graduated: false},
  {id: 5, name: "Elif", score: 42, age: 23, course: "web", graduated: false},
  {id: 6, name: "Chen", score: 50, age: 18, course: "data", graduated: false},
  {id: 7, name: "Ines", score: 43, age: 29, course: "data", graduated: true},
  {id: 8, name: "Gita", score: 36, age: 33, course: "design", graduated: true}
];

function nthByAge(students, n) {
  const sorted = [...students].sort((a, b) => b.age - a.age);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
