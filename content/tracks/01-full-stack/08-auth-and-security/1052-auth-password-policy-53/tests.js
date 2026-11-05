test("case 1: AdaLovelace1!", () => {
  expect(checkHotelPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkHotelPassword("Tr0ub4dor&3", "Ada")).toEqual([]);
});

test("case 3: Mixed Case 42", () => {
  expect(checkHotelPassword("Mixed Case 42", "Ada")).toEqual(["needs a symbol"]);
});

test("case 4: Correct-Horse-9", () => {
  expect(checkHotelPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkHotelPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkHotelPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});
