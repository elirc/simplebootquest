test("with 1, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 1, 3)).toEqual({"items":["Grace","Frances","Ada"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 2, 3)).toEqual({"items":["Dennis","Linus","Alan"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 3, 3)).toEqual({"items":["Margaret","Tim"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfEmployees(EMPLOYEES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
