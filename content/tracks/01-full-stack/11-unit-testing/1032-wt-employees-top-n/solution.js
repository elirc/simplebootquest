test('does not mutate the input', () => {
  const before = JSON.stringify(EMPLOYEES);
  topEmployeesByYearsAtCompany(EMPLOYEES, 1);
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});

test("with 1", () => {
  expect(topEmployeesByYearsAtCompany(EMPLOYEES, 1)).toEqual(["Margaret"]);
});

test("with 3", () => {
  expect(topEmployeesByYearsAtCompany(EMPLOYEES, 3)).toEqual(["Margaret","Linus","Katherine"]);
});

test("with 0", () => {
  expect(topEmployeesByYearsAtCompany(EMPLOYEES, 0)).toEqual([]);
});
