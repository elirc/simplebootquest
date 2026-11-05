test("with \"ra\"", () => {
  expect(searchEmployees(EMPLOYEES, "ra")).toEqual(["Barbara","Radia","Frances","Grace"]);
});

test("with \"RA\"", () => {
  expect(searchEmployees(EMPLOYEES, "RA")).toEqual(["Barbara","Radia","Frances","Grace"]);
});

test("with \"  \"", () => {
  expect(searchEmployees(EMPLOYEES, "  ")).toEqual(["Barbara","Radia","Frances","Linus","Katherine","Dennis","Ada","Grace"]);
});

test("with \"zzz\"", () => {
  expect(searchEmployees(EMPLOYEES, "zzz")).toEqual([]);
});
