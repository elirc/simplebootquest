// mutant: boundary: `<=` became `<`
const COURSES = [
  {id: 1, title: "GraphQL", lessons: 19, enrolled: 4078, level: "intermediate"},
  {id: 2, title: "React Basics", lessons: 12, enrolled: 2620, level: "beginner"},
  {id: 3, title: "Intro to SQL", lessons: 18, enrolled: 902, level: "advanced"},
  {id: 4, title: "Node APIs", lessons: 41, enrolled: 1315, level: "advanced"},
  {id: 5, title: "Data Viz", lessons: 35, enrolled: 1330, level: "advanced"},
  {id: 6, title: "Accessibility", lessons: 47, enrolled: 2097, level: "advanced"},
  {id: 7, title: "Testing JS", lessons: 16, enrolled: 1682, level: "beginner"},
  {id: 8, title: "CSS Layouts", lessons: 34, enrolled: 4434, level: "advanced"}
];

function coursesInRange(courses, low, high) {
  return courses.filter((x) => x.lessons >= low && x.lessons < high).map((x) => x.title);
}
