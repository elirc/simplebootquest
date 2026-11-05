// mutant: condition negated: `===` became `!==`
const STUDENTS = [
  {id: 1, name: "Luca", score: 82, age: 31, course: "design", graduated: false},
  {id: 2, name: "Amara", score: 48, age: 19, course: "data", graduated: false},
  {id: 3, name: "Elif", score: 87, age: 27, course: "design", graduated: true},
  {id: 4, name: "Chen", score: 38, age: 21, course: "data", graduated: false},
  {id: 5, name: "Bilal", score: 36, age: 20, course: "design", graduated: true},
  {id: 6, name: "Femi", score: 72, age: 31, course: "data", graduated: false},
  {id: 7, name: "Hugo", score: 39, age: 26, course: "web", graduated: true},
  {id: 8, name: "Dara", score: 62, age: 29, course: "web", graduated: false}
];

function studentsInCourseRanked(students, value) {
  return students
    .filter((x) => x.course !== value)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.name);
}
