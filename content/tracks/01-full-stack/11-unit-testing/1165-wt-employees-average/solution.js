test("an empty list", () => {
  expect(averageYearsAtCompany([])).toEqual(null);
});

test("all employees", () => {
  expect(averageYearsAtCompany(EMPLOYEES)).toEqual(7);
});
