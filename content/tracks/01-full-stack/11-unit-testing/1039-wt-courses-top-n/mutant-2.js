// mutant: off-by-one in slice
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 28, enrolled: 4617, level: "beginner"},
  {id: 2, title: "Intro to SQL", lessons: 14, enrolled: 919, level: "beginner"},
  {id: 3, title: "React Basics", lessons: 41, enrolled: 2006, level: "intermediate"},
  {id: 4, title: "Testing JS", lessons: 40, enrolled: 4147, level: "intermediate"},
  {id: 5, title: "Web Security", lessons: 13, enrolled: 2050, level: "beginner"},
  {id: 6, title: "GraphQL", lessons: 7, enrolled: 643, level: "advanced"},
  {id: 7, title: "Data Viz", lessons: 26, enrolled: 1600, level: "beginner"},
  {id: 8, title: "CSS Layouts", lessons: 19, enrolled: 644, level: "intermediate"}
];

function topCoursesByLessons(courses, n) {
  return [...courses].sort((a, b) => b.lessons - a.lessons).slice(0, n - 1).map((x) => x.title);
}
