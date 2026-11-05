test("case 1: P4ssw0rd!", () => {
  expect(checkHotelPassword("P4ssw0rd!", "Ada")).toEqual([]);
});

test("case 2: aaaaaaaaaaaa", () => {
  expect(checkHotelPassword("aaaaaaaaaaaa", "Ada")).toEqual(["needs a digit"]);
});

test("case 3: lower123!", () => {
  expect(checkHotelPassword("lower123!", "Ada")).toEqual([]);
});

test("case 4:  Spaces1! ", () => {
  expect(checkHotelPassword(" Spaces1! ", "Ada")).toEqual([]);
});

test("case 5: Mixed Case 42", () => {
  expect(checkHotelPassword("Mixed Case 42", "Ada")).toEqual([]);
});

test("case 6: Correct-Horse-9", () => {
  expect(checkHotelPassword("Correct-Horse-9", "Ada")).toEqual([]);
});
