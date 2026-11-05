const STUDENTS = [
  {id: 1, name: "Bilal", score: 53, age: 29, course: "web", graduated: true},
  {id: 2, name: "Ines", score: 95, age: 29, course: "web", graduated: true},
  {id: 3, name: "Luca", score: 45, age: 23, course: "web", graduated: true},
  {id: 4, name: "Dara", score: 69, age: 32, course: "web", graduated: true},
  {id: 5, name: "Elif", score: 85, age: 31, course: "data", graduated: true},
  {id: 6, name: "Keiko", score: 40, age: 26, course: "web", graduated: false},
  {id: 7, name: "Femi", score: 64, age: 26, course: "design", graduated: false},
  {id: 8, name: "Chen", score: 85, age: 32, course: "web", graduated: false}
];

function searchStudents(students, query) {
  const q = query.trim().toLowerCase();
  return students.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
