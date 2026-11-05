const COURSES = [
  {id: 1, title: "Data Viz", lessons: 42, enrolled: 4619, level: "intermediate"},
  {id: 2, title: "Docker Intro", lessons: 14, enrolled: 3273, level: "beginner"},
  {id: 3, title: "Testing JS", lessons: 10, enrolled: 501, level: "intermediate"},
  {id: 4, title: "React Basics", lessons: 26, enrolled: 3412, level: "intermediate"},
  {id: 5, title: "Node APIs", lessons: 47, enrolled: 4079, level: "advanced"},
  {id: 6, title: "Intro to SQL", lessons: 19, enrolled: 1418, level: "beginner"},
  {id: 7, title: "Web Security", lessons: 20, enrolled: 2346, level: "advanced"},
  {id: 8, title: "CSS Layouts", lessons: 16, enrolled: 275, level: "advanced"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(COURSES);
  topCoursesByEnrolled(COURSES, 1);
  expect(JSON.stringify(COURSES)).toBe(before);
});

test("with 1", () => {
  expect(topCoursesByEnrolled(COURSES, 1)).toEqual(["Data Viz"]);
});

test("with 3", () => {
  expect(topCoursesByEnrolled(COURSES, 3)).toEqual(["Data Viz","Node APIs","React Basics"]);
});

test("with 0", () => {
  expect(topCoursesByEnrolled(COURSES, 0)).toEqual([]);
});
