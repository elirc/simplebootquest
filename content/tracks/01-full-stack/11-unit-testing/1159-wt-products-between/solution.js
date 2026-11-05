test("with 72, 78", () => {
  expect(productsInRange(PRODUCTS, 72, 78)).toEqual(["Mouse Pad","Backpack","Water Bottle"]);
});

test("with 78, 88", () => {
  expect(productsInRange(PRODUCTS, 78, 88)).toEqual(["Monitor Arm","Backpack"]);
});

test("with 72, 72", () => {
  expect(productsInRange(PRODUCTS, 72, 72)).toEqual(["Mouse Pad"]);
});
