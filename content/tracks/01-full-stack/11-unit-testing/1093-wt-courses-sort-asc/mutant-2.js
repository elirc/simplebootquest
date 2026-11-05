// mutant: sorts (mutates) the input array in place
const COURSES = [
  {id: 1, title: "Web Security", lessons: 9, enrolled: 4688, level: "advanced"},
  {id: 2, title: "Git Essentials", lessons: 28, enrolled: 3266, level: "beginner"},
  {id: 3, title: "Node APIs", lessons: 21, enrolled: 3559, level: "beginner"},
  {id: 4, title: "Accessibility", lessons: 19, enrolled: 3182, level: "advanced"},
  {id: 5, title: "GraphQL", lessons: 42, enrolled: 258, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 38, enrolled: 3142, level: "advanced"},
  {id: 7, title: "CSS Layouts", lessons: 22, enrolled: 1216, level: "advanced"},
  {id: 8, title: "React Basics", lessons: 11, enrolled: 2046, level: "advanced"}
];

function coursesByLessons(courses) {
  return courses.sort((a, b) => a.lessons - b.lessons).map((x) => x.title);
}
