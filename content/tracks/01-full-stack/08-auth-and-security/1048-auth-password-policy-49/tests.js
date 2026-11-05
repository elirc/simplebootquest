test("case 1: lower123!", () => {
  expect(checkHotelPassword("lower123!", "Ada")).toEqual([]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkHotelPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit","needs a symbol"]);
});

test("case 3: Correct-Horse-9", () => {
  expect(checkHotelPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 4: P4ssw0rd!", () => {
  expect(checkHotelPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 5: AdaLovelace1!", () => {
  expect(checkHotelPassword("AdaLovelace1!", "Ada")).toEqual([]);
});

test("case 6: UPPER123!", () => {
  expect(checkHotelPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});
