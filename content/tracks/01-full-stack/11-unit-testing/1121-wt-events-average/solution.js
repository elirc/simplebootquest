test("an empty list", () => {
  expect(averageCapacity([])).toEqual(null);
});

test("all events", () => {
  expect(averageCapacity(EVENTS)).toEqual(257.3);
});
