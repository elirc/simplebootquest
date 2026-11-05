test("case 1: AdaLovelace1!", () => {
  expect(checkFlightPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkFlightPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkFlightPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkFlightPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 5: lower123!", () => {
  expect(checkFlightPassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 6: password", () => {
  expect(checkFlightPassword("password", "Ada")).toEqual(["too short","needs a digit"]);
});
