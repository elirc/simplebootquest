test("case 1: lower123!", () => {
  expect(checkCarPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 2: Correct-Horse-9", () => {
  expect(checkCarPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 3: password", () => {
  expect(checkCarPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 4: ada", () => {
  expect(checkCarPassword("ada", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkCarPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter"]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkCarPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});
