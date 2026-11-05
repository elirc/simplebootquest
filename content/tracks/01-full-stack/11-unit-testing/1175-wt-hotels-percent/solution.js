test("an empty list", () => {
  expect(percentBreakfast([])).toEqual(0);
});

test("all hotels", () => {
  expect(percentBreakfast(HOTELS)).toEqual(38);
});
