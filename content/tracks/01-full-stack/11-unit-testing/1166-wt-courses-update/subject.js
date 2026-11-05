const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 17, enrolled: 3232, level: "intermediate"},
  {id: 2, title: "Web Security", lessons: 47, enrolled: 115, level: "advanced"},
  {id: 3, title: "Accessibility", lessons: 31, enrolled: 1674, level: "advanced"},
  {id: 4, title: "GraphQL", lessons: 44, enrolled: 1520, level: "beginner"},
  {id: 5, title: "CSS Layouts", lessons: 25, enrolled: 1608, level: "beginner"},
  {id: 6, title: "Intro to SQL", lessons: 45, enrolled: 2783, level: "advanced"},
  {id: 7, title: "React Basics", lessons: 44, enrolled: 2509, level: "advanced"},
  {id: 8, title: "Data Viz", lessons: 19, enrolled: 4359, level: "beginner"}
];

function bumpLessons(courses, value, amount) {
  return courses.map((x) => (x.level === value ? { ...x, lessons: x.lessons + amount } : x));
}
