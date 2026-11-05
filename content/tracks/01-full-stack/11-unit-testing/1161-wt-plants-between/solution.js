test("with 27, 50", () => {
  expect(plantsInRange(PLANTS, 27, 50)).toEqual(["Aloe","Fern","Mint"]);
});

test("with 50, 88", () => {
  expect(plantsInRange(PLANTS, 50, 88)).toEqual(["Aloe","Bonsai"]);
});

test("with 27, 27", () => {
  expect(plantsInRange(PLANTS, 27, 27)).toEqual(["Fern"]);
});
