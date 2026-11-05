test("case 1: xxxxxxxxxxxx…", () => {
  expect(checkHotelPassword("xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxA1!", "Ada")).toEqual([]);
});

test("case 2: ada", () => {
  expect(checkHotelPassword("ada", "Ada")).toEqual(["too short","needs a symbol","contains your name"]);
});

test("case 3:  Spaces1! ", () => {
  expect(checkHotelPassword(" Spaces1! ", "Ada")).toEqual(["too short"]);
});

test("case 4: AdaLovelace1!", () => {
  expect(checkHotelPassword("AdaLovelace1!", "Ada")).toEqual(["contains your name"]);
});

test("case 5: Correct-Horse-9", () => {
  expect(checkHotelPassword("Correct-Horse-9", "Ada")).toEqual([]);
});

test("case 6: P4ssw0rd!", () => {
  expect(checkHotelPassword("P4ssw0rd!", "Ada")).toEqual(["too short"]);
});
