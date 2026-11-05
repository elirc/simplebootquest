test("with 1", () => {
  expect(nthByYearsAtCompany(EMPLOYEES, 1)).toEqual("Alan");
});

test("with 2", () => {
  expect(nthByYearsAtCompany(EMPLOYEES, 2)).toEqual("Ada");
});

test("with 5", () => {
  expect(nthByYearsAtCompany(EMPLOYEES, 5)).toEqual("Dennis");
});

test("with 0", () => {
  expect(nthByYearsAtCompany(EMPLOYEES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByYearsAtCompany(EMPLOYEES, 99)).toEqual(null);
});
