test("case 1: P4ssw0rd!", () => {
  expect(checkWorkoutPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkWorkoutPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 3: UPPER123!", () => {
  expect(checkWorkoutPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 4: AdaLovelace1!", () => {
  expect(checkWorkoutPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkWorkoutPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: xxxxxxxxxxxx…", () => {
  expect(checkWorkoutPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});
