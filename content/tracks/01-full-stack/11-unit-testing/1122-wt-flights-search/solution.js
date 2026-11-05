test("with \"b6\"", () => {
  expect(searchFlights(FLIGHTS, "b6")).toEqual(["IB6251"]);
});

test("with \"B6\"", () => {
  expect(searchFlights(FLIGHTS, "B6")).toEqual(["IB6251"]);
});

test("with \"  \"", () => {
  expect(searchFlights(FLIGHTS, "  ")).toEqual(["IB6251","UA90","QF1","KL641","BA117","EK3","DL15","AA100"]);
});

test("with \"zzz\"", () => {
  expect(searchFlights(FLIGHTS, "zzz")).toEqual([]);
});
