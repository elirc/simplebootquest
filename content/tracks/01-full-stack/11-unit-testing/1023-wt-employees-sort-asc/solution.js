test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  employeesByYearsAtCompany(EMPLOYEES);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("all employees", () => {
  expect(employeesByYearsAtCompany(EMPLOYEES)).toEqual(["Linus","Margaret","Katherine","Frances","Alan","Ken","Tim","Radia"]);
});
