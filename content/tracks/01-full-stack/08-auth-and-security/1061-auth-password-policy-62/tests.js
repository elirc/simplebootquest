test("case 1: ada", () => {
  expect(checkFlightPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter","contains your name"]);
});

test("case 2: lower123!", () => {
  expect(checkFlightPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkFlightPassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkFlightPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkFlightPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 6: password", () => {
  expect(checkFlightPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});
