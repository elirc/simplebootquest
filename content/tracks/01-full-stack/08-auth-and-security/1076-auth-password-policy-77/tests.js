test("case 1: P4ssw0rd!", () => {
  expect(checkFlightPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkFlightPassword("aaaaaaaaaaaa", "Ada")).toEqual([]);
});

test("case 3: UPPER123!", () => {
  expect(checkFlightPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkFlightPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 5: password", () => {
  expect(checkFlightPassword("password", "Ada")).toEqual(["too short"]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkFlightPassword(" Spaces1! ", "Ada")).toEqual([]);
});
