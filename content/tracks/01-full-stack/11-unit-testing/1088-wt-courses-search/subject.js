const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 33, enrolled: 2573, level: "beginner"},
  {id: 2, title: "Testing JS", lessons: 27, enrolled: 3691, level: "advanced"},
  {id: 3, title: "GraphQL", lessons: 45, enrolled: 3513, level: "beginner"},
  {id: 4, title: "Intro to SQL", lessons: 48, enrolled: 3439, level: "advanced"},
  {id: 5, title: "Node APIs", lessons: 21, enrolled: 3299, level: "intermediate"},
  {id: 6, title: "CSS Layouts", lessons: 27, enrolled: 2303, level: "beginner"},
  {id: 7, title: "TypeScript 101", lessons: 24, enrolled: 1215, level: "beginner"},
  {id: 8, title: "React Basics", lessons: 17, enrolled: 2153, level: "intermediate"}
];

function searchCourses(courses, query) {
  const q = query.trim().toLowerCase();
  return courses.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
