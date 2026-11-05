test("with \"platform\"", () => {
  expect(employeesInTeamRanked(EMPLOYEES, "platform")).toEqual(["Ken","Grace","Dennis"]);
});

test("with \"product\"", () => {
  expect(employeesInTeamRanked(EMPLOYEES, "product")).toEqual(["Alan","Tim","Katherine","Radia"]);
});

test("with \"data\"", () => {
  expect(employeesInTeamRanked(EMPLOYEES, "data")).toEqual(["Barbara"]);
});
