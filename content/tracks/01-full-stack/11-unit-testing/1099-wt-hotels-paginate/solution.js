test("with 1, 3", () => {
  expect(pageOfHotels(HOTELS, 1, 3)).toEqual({"items":["Station Hotel","Cityloft","Northern Star"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfHotels(HOTELS, 2, 3)).toEqual({"items":["Olive Court","Pine Lodge","Sky Garden"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfHotels(HOTELS, 3, 3)).toEqual({"items":["Old Mill","The Grand"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfHotels(HOTELS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
