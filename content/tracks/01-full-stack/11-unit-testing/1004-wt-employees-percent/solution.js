test("an empty list", () => {
  expect(percentRemote([])).toEqual(0);
});

test("all employees", () => {
  expect(percentRemote(EMPLOYEES)).toEqual(38);
});
