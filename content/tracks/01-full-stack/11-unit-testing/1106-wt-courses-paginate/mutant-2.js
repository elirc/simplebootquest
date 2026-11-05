// mutant: `Math.ceil` became `Math.floor`
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 19, enrolled: 3862, level: "intermediate"},
  {id: 2, title: "Intro to SQL", lessons: 20, enrolled: 1491, level: "intermediate"},
  {id: 3, title: "Docker Intro", lessons: 11, enrolled: 2227, level: "beginner"},
  {id: 4, title: "React Basics", lessons: 7, enrolled: 724, level: "intermediate"},
  {id: 5, title: "GraphQL", lessons: 28, enrolled: 2938, level: "intermediate"},
  {id: 6, title: "Data Viz", lessons: 13, enrolled: 3482, level: "intermediate"},
  {id: 7, title: "Testing JS", lessons: 14, enrolled: 1611, level: "advanced"},
  {id: 8, title: "Accessibility", lessons: 33, enrolled: 3887, level: "intermediate"}
];

function pageOfCourses(courses, page, size) {
  const totalPages = Math.floor(courses.length / size);
  const items = courses.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
