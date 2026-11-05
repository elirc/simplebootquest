// mutant: condition negated: `===` became `!==`
const COURSES = [
  {id: 1, title: "TypeScript 101", lessons: 22, enrolled: 3874, level: "beginner"},
  {id: 2, title: "CSS Layouts", lessons: 14, enrolled: 161, level: "advanced"},
  {id: 3, title: "Git Essentials", lessons: 26, enrolled: 1735, level: "beginner"},
  {id: 4, title: "GraphQL", lessons: 13, enrolled: 104, level: "intermediate"},
  {id: 5, title: "Data Viz", lessons: 27, enrolled: 1000, level: "intermediate"},
  {id: 6, title: "Intro to SQL", lessons: 42, enrolled: 227, level: "beginner"},
  {id: 7, title: "Docker Intro", lessons: 25, enrolled: 1608, level: "beginner"},
  {id: 8, title: "Accessibility", lessons: 48, enrolled: 4221, level: "intermediate"}
];

function coursesInLevelRanked(courses, value) {
  return courses
    .filter((x) => x.level !== value)
    .sort((a, b) => b.lessons - a.lessons)
    .map((x) => x.title);
}
