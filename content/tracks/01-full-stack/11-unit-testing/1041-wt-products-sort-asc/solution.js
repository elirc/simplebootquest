test('does not mutate the input', () => {
  const before = JSON.stringify(PRODUCTS);
  productsByPrice(PRODUCTS);
  expect(JSON.stringify(PRODUCTS)).toBe(before);
});

test("all products", () => {
  expect(productsByPrice(PRODUCTS)).toEqual(["Monitor Arm","Headphones","Coffee Mug","Water Bottle","Plant Pot","Desk Lamp","Mouse Pad","Webcam"]);
});
