test("case 1: ada", () => {
  expect(checkHotelPassword("ada", "Ada")).toEqual(["too short","needs a digit"]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkHotelPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 3: UPPER123!", () => {
  expect(checkHotelPassword("UPPER123!", "Ada")).toEqual(["needs a lowercase letter"]);
});

test("case 4: lower123!", () => {
  expect(checkHotelPassword("lower123!", "Ada")).toEqual([]);
});

test("case 5:  Spaces1! ", () => {
  expect(checkHotelPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkHotelPassword("P4ssw0rd!", "Ada")).toEqual([]);
});
