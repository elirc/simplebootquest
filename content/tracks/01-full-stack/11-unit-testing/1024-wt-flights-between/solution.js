test("with 23, 30", () => {
  expect(flightsInRange(FLIGHTS, 23, 30)).toEqual(["DL15","QF1","AF22"]);
});

test("with 30, 38", () => {
  expect(flightsInRange(FLIGHTS, 30, 38)).toEqual(["QF1","SQ25"]);
});

test("with 23, 23", () => {
  expect(flightsInRange(FLIGHTS, 23, 23)).toEqual(["DL15"]);
});
