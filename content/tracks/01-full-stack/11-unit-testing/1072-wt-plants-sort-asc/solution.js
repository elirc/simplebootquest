test('does not mutate the input', () => {
  const before = JSON.stringify(PLANTS);
  plantsByWaterEveryDays(PLANTS);
  expect(JSON.stringify(PLANTS)).toBe(before);
});

test("all plants", () => {
  expect(plantsByWaterEveryDays(PLANTS)).toEqual(["Ivy","Peace Lily","Mint","Basil","Bonsai","Aloe","Snake Plant","Orchid"]);
});
