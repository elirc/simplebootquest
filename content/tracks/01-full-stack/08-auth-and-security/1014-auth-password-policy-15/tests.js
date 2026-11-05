test("case 1:  Spaces1! ", () => {
  expect(checkHotelPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 2: password", () => {
  expect(checkHotelPassword("password", "Ada")).toEqual(["too short","needs an uppercase letter","needs a symbol"]);
});

test("case 3: AdaLovelace1!", () => {
  expect(checkHotelPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 4: UPPER123!", () => {
  expect(checkHotelPassword("UPPER123!", "Ada")).toEqual(["too short"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkHotelPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: aaaaaaaaaaaa", () => {
  expect(checkHotelPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs an uppercase letter","needs a symbol"]);
});
