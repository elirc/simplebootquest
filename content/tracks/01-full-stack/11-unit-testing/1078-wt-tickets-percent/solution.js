test("an empty list", () => {
  expect(percentResolved([])).toEqual(0);
});

test("all tickets", () => {
  expect(percentResolved(TICKETS)).toEqual(25);
});
