test("case 1: password", () => {
  expect(checkCityPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 2:  Spaces1! ", () => {
  expect(checkCityPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkCityPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 4: P4ssw0rd!", () => {
  expect(checkCityPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkCityPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkCityPassword("Correct-Horse-9", "Ada")).toEqual([]);
});
