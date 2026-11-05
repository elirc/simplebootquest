const BEFORE = [
  {id: 1, title: "Git Essentials", lessons: 23, enrolled: 1297, level: "beginner"},
  {id: 2, title: "React Basics", lessons: 22, enrolled: 3375, level: "intermediate"},
  {id: 3, title: "Data Viz", lessons: 45, enrolled: 706, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 46, enrolled: 1139, level: "intermediate"},
  {id: 5, title: "Web Security", lessons: 43, enrolled: 1963, level: "beginner"},
  {id: 6, title: "TypeScript 101", lessons: 30, enrolled: 3496, level: "intermediate"},
  {id: 7, title: "Node APIs", lessons: 10, enrolled: 4444, level: "intermediate"},
  {id: 8, title: "Accessibility", lessons: 28, enrolled: 3793, level: "advanced"}
];
const AFTER = [
  {id: 1, title: "Git Essentials", lessons: 23, enrolled: 1297, level: "beginner"},
  {id: 2, title: "React Basics", lessons: 29, enrolled: 3375, level: "intermediate"},
  {id: 3, title: "Data Viz", lessons: 45, enrolled: 706, level: "beginner"},
  {id: 4, title: "CSS Layouts", lessons: 46, enrolled: 1139, level: "intermediate"},
  {id: 5, title: "Web Security", lessons: 50, enrolled: 1963, level: "beginner"},
  {id: 6, title: "TypeScript 101", lessons: 30, enrolled: 3496, level: "intermediate"},
  {id: 7, title: "Node APIs", lessons: 10, enrolled: 4444, level: "intermediate"},
  {id: 8, title: "Accessibility", lessons: 35, enrolled: 3793, level: "advanced"}
];

test("finds changed ids", () => {
  expect(lessonsChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(lessonsChanges(BEFORE, BEFORE)).toEqual([]);
});
