test("an empty list", () => {
  expect(averageSeconds([])).toEqual(null);
});

test("all songs", () => {
  expect(averageSeconds(SONGS)).toEqual(255.9);
});
