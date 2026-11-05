test("an empty list", () => {
  expect(percentFree([])).toEqual(0);
});

test("all events", () => {
  expect(percentFree(EVENTS)).toEqual(25);
});
