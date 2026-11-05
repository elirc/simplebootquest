test("case 1: Correct-Horse-9", () => {
  expect(checkPlantPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 2: UPPER123!", () => {
  expect(checkPlantPassword("UPPER123!", "Ada")).toEqual(["too short","needs a lowercase letter"]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkPlantPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 4: Tr0ub4dor&3", () => {
  expect(checkPlantPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 5: ada", () => {
  expect(checkPlantPassword("ada", "Ada")).toEqual(["too short","needs a symbol","contains your name"]);
});

test("case 6: password", () => {
  expect(checkPlantPassword("password", "Ada")).toEqual(["too short","needs a symbol"]);
});
