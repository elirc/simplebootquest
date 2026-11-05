test("with 1, 3", () => {
  expect(pageOfFlights(FLIGHTS, 1, 3)).toEqual({"items":["SQ25","UA90","EK3"],"page":1,"totalPages":3});
});

test("with 2, 3", () => {
  expect(pageOfFlights(FLIGHTS, 2, 3)).toEqual({"items":["BA117","LH400","KL641"],"page":2,"totalPages":3});
});

test("with 3, 3", () => {
  expect(pageOfFlights(FLIGHTS, 3, 3)).toEqual({"items":["AF22","QF1"],"page":3,"totalPages":3});
});

test("with 9, 3", () => {
  expect(pageOfFlights(FLIGHTS, 9, 3)).toEqual({"items":[],"page":9,"totalPages":3});
});
