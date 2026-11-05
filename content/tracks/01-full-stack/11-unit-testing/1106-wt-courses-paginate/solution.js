test("with 1, 3", () => {
  expect(pageOfCourses(COURSES, 1, 3)).toEqual({"items":["TypeScript 101","Intro to SQL","Docker Intro"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfCourses(COURSES, 2, 3)).toEqual({"items":["React Basics","GraphQL","Data Viz"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfCourses(COURSES, 3, 3)).toEqual({"items":["Testing JS","Accessibility"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfCourses(COURSES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
