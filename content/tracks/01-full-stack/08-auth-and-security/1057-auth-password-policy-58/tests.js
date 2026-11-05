test("case 1: ada", () => {
  expect(checkWorkoutPassword("ada", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 2: lower123!", () => {
  expect(checkWorkoutPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 3: aaaaaaaaaaaa", () => {
  expect(checkWorkoutPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});

test("case 4: AdaLovelace1!", () => {
  expect(checkWorkoutPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkWorkoutPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkWorkoutPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});
