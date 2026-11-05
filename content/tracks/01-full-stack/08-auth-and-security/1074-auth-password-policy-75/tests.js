test("case 1:  Spaces1! ", () => {
  expect(checkEventPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: P4ssw0rd!", () => {
  expect(checkEventPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});

test("case 3: AdaLovelace1!", () => {
  expect(checkEventPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 4: Correct-Horse-9", () => {
  expect(checkEventPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 5: xxxxxxxxxxxx…", () => {
  expect(checkEventPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 6: Mixed Case 42", () => {
  expect(checkEventPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});
