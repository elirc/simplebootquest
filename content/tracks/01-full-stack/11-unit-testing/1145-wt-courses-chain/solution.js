test("with \"beginner\"", () => {
  expect(coursesInLevelRanked(COURSES, "beginner")).toEqual(["Intro to SQL","Git Essentials","Docker Intro","TypeScript 101"]);
});

test("with \"intermediate\"", () => {
  expect(coursesInLevelRanked(COURSES, "intermediate")).toEqual(["Accessibility","Data Viz","GraphQL"]);
});

test("with \"advanced\"", () => {
  expect(coursesInLevelRanked(COURSES, "advanced")).toEqual(["CSS Layouts"]);
});
