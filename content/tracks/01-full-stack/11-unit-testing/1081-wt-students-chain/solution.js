test("with \"web\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "web")).toEqual(["Dara","Hugo"]);
});

test("with \"data\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "data")).toEqual(["Femi","Amara","Chen"]);
});

test("with \"design\"", () => {
  expect(studentsInCourseRanked(STUDENTS, "design")).toEqual(["Elif","Luca","Bilal"]);
});
