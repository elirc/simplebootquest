const STUDENTS = [
  {id: 1, name: "Ines", score: 75, age: 28, course: "web", graduated: true},
  {id: 2, name: "Dara", score: 75, age: 34, course: "data", graduated: false},
  {id: 3, name: "Elif", score: 91, age: 32, course: "web", graduated: false},
  {id: 4, name: "Bilal", score: 40, age: 30, course: "data", graduated: true},
  {id: 5, name: "Femi", score: 46, age: 32, course: "data", graduated: true},
  {id: 6, name: "Luca", score: 62, age: 17, course: "design", graduated: true},
  {id: 7, name: "Keiko", score: 76, age: 23, course: "design", graduated: false},
  {id: 8, name: "Gita", score: 42, age: 28, course: "web", graduated: false}
];

function pageOfStudents(students, page, size) {
  const totalPages = Math.ceil(students.length / size);
  const items = students.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
