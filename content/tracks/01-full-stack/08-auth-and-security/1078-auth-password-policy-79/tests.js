test("case 1:  Spaces1! ", () => {
  expect(checkPlantPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: Mixed Case 42", () => {
  expect(checkPlantPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 3: P4ssw0rd!", () => {
  expect(checkPlantPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 4: Correct-Horse-9", () => {
  expect(checkPlantPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkPlantPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 6: ada", () => {
  expect(checkPlantPassword("ada", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter","contains your name"]);
});
