test("case 1: AdaLovelace1!", () => {
  expect(checkHotelPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 2: Tr0ub4dor&3", () => {
  expect(checkHotelPassword("Tr0ub4dor&3", "Ada")).toEqual(["too short"]);
});

test("case 3: lower123!", () => {
  expect(checkHotelPassword("lower123!", "Ada")).toEqual(["too short"]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkHotelPassword(" Spaces1! ", "Ada")).toEqual(["too short","has surrounding spaces"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkHotelPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: UPPER123!", () => {
  expect(checkHotelPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});
