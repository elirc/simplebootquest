test("an empty list", () => {
  expect(averageDelayMin([])).toEqual(null);
});

test("all flights", () => {
  expect(averageDelayMin(FLIGHTS)).toEqual(91);
});
