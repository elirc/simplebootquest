const COURSES = [
  {id: 1, title: "Git Essentials", lessons: 33, enrolled: 94, level: "beginner"},
  {id: 2, title: "Web Security", lessons: 25, enrolled: 3897, level: "advanced"},
  {id: 3, title: "Testing JS", lessons: 42, enrolled: 2500, level: "advanced"},
  {id: 4, title: "Data Viz", lessons: 29, enrolled: 4157, level: "intermediate"},
  {id: 5, title: "Docker Intro", lessons: 32, enrolled: 1049, level: "beginner"},
  {id: 6, title: "CSS Layouts", lessons: 23, enrolled: 1334, level: "advanced"},
  {id: 7, title: "Intro to SQL", lessons: 45, enrolled: 174, level: "intermediate"},
  {id: 8, title: "Accessibility", lessons: 47, enrolled: 1594, level: "intermediate"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(COURSES);
  coursesByLessons(COURSES);
  expect(JSON.stringify(COURSES)).toBe(before);
});

test("all courses", () => {
  expect(coursesByLessons(COURSES)).toEqual(["CSS Layouts","Web Security","Data Viz","Docker Intro","Git Essentials","Testing JS","Intro to SQL","Accessibility"]);
});
