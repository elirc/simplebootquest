test("case 1: P4ssw0rd!", () => {
  expect(checkCarPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkCarPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkCarPassword("Mixed Case 42", "Ada")).toEqual(["too short"]);
});

test("case 4: lower123!", () => {
  expect(checkCarPassword("lower123!", "Ada")).toEqual(["too short","needs an uppercase letter"]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkCarPassword("aaaaaaaaaaaa", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter"]);
});

test("case 6: xxxxxxxxxxxx…", () => {
  expect(checkCarPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});
