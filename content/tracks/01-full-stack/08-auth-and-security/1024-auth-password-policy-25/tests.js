test("case 1:  Spaces1! ", () => {
  expect(checkCarPassword(" Spaces1! ", "Ada")).toEqual(["has surrounding spaces"]);
});

test("case 2: Mixed Case 42", () => {
  expect(checkCarPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 3: Correct-Horse-9", () => {
  expect(checkCarPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 4: password", () => {
  expect(checkCarPassword("password", "Ada")).toEqual(["too short","needs a symbol"]);
});

test("case 5: aaaaaaaaaaaa", () => {
  expect(checkCarPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a symbol"]);
});

test("case 6: AdaLovelace1!", () => {
  expect(checkCarPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});
