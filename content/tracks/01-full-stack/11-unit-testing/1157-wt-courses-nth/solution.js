test("with 1", () => {
  expect(nthByLessons(COURSES, 1)).toEqual("Data Viz");
});

test("with 2", () => {
  expect(nthByLessons(COURSES, 2)).toEqual("GraphQL");
});

test("with 5", () => {
  expect(nthByLessons(COURSES, 5)).toEqual("React Basics");
});

test("with 0", () => {
  expect(nthByLessons(COURSES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByLessons(COURSES, 99)).toEqual(null);
});
