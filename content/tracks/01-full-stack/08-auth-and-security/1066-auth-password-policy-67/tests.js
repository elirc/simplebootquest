test("case 1: P4ssw0rd!", () => {
  expect(checkProductPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkProductPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 3: Correct-Horse-9", () => {
  expect(checkProductPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 4: password", () => {
  expect(checkProductPassword("password", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkProductPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs an uppercase letter"]);
});

test("case 6: ada", () => {
  expect(checkProductPassword("ada", "Ada")).toEqual(["too short","needs a digit","needs an uppercase letter","contains your name"]);
});
