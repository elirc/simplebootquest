// mutant: sort direction reversed
const COURSES = [
  {id: 1, title: "React Basics", lessons: 18, enrolled: 1823, level: "beginner"},
  {id: 2, title: "Docker Intro", lessons: 8, enrolled: 3091, level: "advanced"},
  {id: 3, title: "GraphQL", lessons: 30, enrolled: 1798, level: "intermediate"},
  {id: 4, title: "Data Viz", lessons: 34, enrolled: 790, level: "beginner"},
  {id: 5, title: "Testing JS", lessons: 14, enrolled: 59, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 30, enrolled: 2579, level: "advanced"},
  {id: 7, title: "Node APIs", lessons: 12, enrolled: 644, level: "advanced"},
  {id: 8, title: "Git Essentials", lessons: 21, enrolled: 4379, level: "intermediate"}
];

function nthByLessons(courses, n) {
  const sorted = [...courses].sort((a, b) => a.lessons - b.lessons);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].title : null;
}
