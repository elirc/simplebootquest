test("with \"low\"", () => {
  expect(plantsInLightRanked(PLANTS, "low")).toEqual(["Aloe","Lavender","Ivy","Basil"]);
});

test("with \"medium\"", () => {
  expect(plantsInLightRanked(PLANTS, "medium")).toEqual(["Orchid","Monstera"]);
});

test("with \"bright\"", () => {
  expect(plantsInLightRanked(PLANTS, "bright")).toEqual(["Snake Plant","Peace Lily"]);
});
