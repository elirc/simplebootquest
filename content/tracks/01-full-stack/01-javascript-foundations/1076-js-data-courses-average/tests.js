const COURSES = [
  {id: 1, title: "Accessibility", lessons: 42, enrolled: 3753, level: "advanced"},
  {id: 2, title: "Testing JS", lessons: 45, enrolled: 4382, level: "advanced"},
  {id: 3, title: "React Basics", lessons: 13, enrolled: 3968, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 32, enrolled: 150, level: "intermediate"},
  {id: 5, title: "Node APIs", lessons: 11, enrolled: 604, level: "intermediate"},
  {id: 6, title: "Git Essentials", lessons: 6, enrolled: 2664, level: "advanced"},
  {id: 7, title: "Docker Intro", lessons: 8, enrolled: 3298, level: "intermediate"},
  {id: 8, title: "Intro to SQL", lessons: 39, enrolled: 1048, level: "advanced"}
];

test("an empty list", () => {
  expect(averageLessons([])).toEqual(null);
});

test("all courses", () => {
  expect(averageLessons(COURSES)).toEqual(24.5);
});
