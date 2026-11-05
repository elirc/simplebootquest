test("an empty list", () => {
  expect(averageAgeHours([])).toEqual(null);
});

test("all tickets", () => {
  expect(averageAgeHours(TICKETS)).toEqual(90.9);
});
