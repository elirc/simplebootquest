test("an empty list", () => {
  expect(averageStars([])).toEqual(null);
});

test("all hotels", () => {
  expect(averageStars(HOTELS)).toEqual(2.4);
});
