test("with 1, 3", () => {
  expect(pageOfProducts(PRODUCTS, 1, 3)).toEqual({"items":["Coffee Mug","Plant Pot","Notebook"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfProducts(PRODUCTS, 2, 3)).toEqual({"items":["Backpack","Mouse Pad","Webcam"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfProducts(PRODUCTS, 3, 3)).toEqual({"items":["Monitor Arm","Desk Lamp"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfProducts(PRODUCTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
