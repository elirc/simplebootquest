test("case 1: password", () => {
  expect(checkEmployeePassword("password", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 2: AdaLovelace1!", () => {
  expect(checkEmployeePassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 3: xxxxxxxxxxxx…", () => {
  expect(checkEmployeePassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 4: lower123!", () => {
  expect(checkEmployeePassword("lower123!", "Ada")).toEqual([]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkEmployeePassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a symbol"]);
});

test("case 6:  Spaces1! ", () => {
  expect(checkEmployeePassword(" Spaces1! ", "Ada")).toEqual([]);
});
