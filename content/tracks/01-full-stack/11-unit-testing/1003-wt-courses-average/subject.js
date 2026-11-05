const COURSES = [
  {id: 1, title: "Intro to SQL", lessons: 39, enrolled: 754, level: "advanced"},
  {id: 2, title: "Data Viz", lessons: 27, enrolled: 3871, level: "intermediate"},
  {id: 3, title: "React Basics", lessons: 30, enrolled: 4006, level: "advanced"},
  {id: 4, title: "Docker Intro", lessons: 22, enrolled: 3363, level: "advanced"},
  {id: 5, title: "Testing JS", lessons: 33, enrolled: 3224, level: "intermediate"},
  {id: 6, title: "Node APIs", lessons: 43, enrolled: 315, level: "intermediate"},
  {id: 7, title: "GraphQL", lessons: 36, enrolled: 2560, level: "beginner"},
  {id: 8, title: "Accessibility", lessons: 34, enrolled: 3315, level: "intermediate"}
];

function averageEnrolled(courses) {
  if (courses.length === 0) return null;
  const total = courses.reduce((sum, x) => sum + x.enrolled, 0);
  return Math.round((total / courses.length) * 10) / 10;
}
