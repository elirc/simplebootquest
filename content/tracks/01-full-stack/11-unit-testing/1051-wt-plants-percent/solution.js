test("an empty list", () => {
  expect(percentPetSafe([])).toEqual(0);
});

test("all plants", () => {
  expect(percentPetSafe(PLANTS)).toEqual(63);
});
