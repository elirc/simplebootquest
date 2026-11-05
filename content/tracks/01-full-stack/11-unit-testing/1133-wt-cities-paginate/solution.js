test("with 1, 3", () => {
  expect(pageOfCities(CITIES, 1, 3)).toEqual({"items":["Lisbon","Lima","Turin"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfCities(CITIES, 2, 3)).toEqual({"items":["Seoul","Lagos","Hanoi"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfCities(CITIES, 3, 3)).toEqual({"items":["Oslo","Cairo"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfCities(CITIES, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
