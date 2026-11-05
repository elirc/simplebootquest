test("with \"ra\"", () => {
  expect(searchCourses(COURSES, "ra")).toEqual(["GraphQL"]);
});

test("with \"RA\"", () => {
  expect(searchCourses(COURSES, "RA")).toEqual(["GraphQL"]);
});

test("with \"  \"", () => {
  expect(searchCourses(COURSES, "  ")).toEqual(["Git Essentials","Testing JS","GraphQL","Intro to SQL","Node APIs","CSS Layouts","TypeScript 101","React Basics"]);
});

test("with \"zzz\"", () => {
  expect(searchCourses(COURSES, "zzz")).toEqual([]);
});
