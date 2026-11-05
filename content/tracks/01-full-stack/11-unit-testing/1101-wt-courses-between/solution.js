test("with 18, 34", () => {
  expect(coursesInRange(COURSES, 18, 34)).toEqual(["GraphQL","Intro to SQL","CSS Layouts"]);
});

test("with 34, 35", () => {
  expect(coursesInRange(COURSES, 34, 35)).toEqual(["Data Viz","CSS Layouts"]);
});

test("with 18, 18", () => {
  expect(coursesInRange(COURSES, 18, 18)).toEqual(["Intro to SQL"]);
});
