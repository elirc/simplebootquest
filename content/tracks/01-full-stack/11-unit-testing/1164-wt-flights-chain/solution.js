test("with \"oneworld\"", () => {
  expect(flightsInAirlineRanked(FLIGHTS, "oneworld")).toEqual(["EK3","QF1"]);
});

test("with \"skyteam\"", () => {
  expect(flightsInAirlineRanked(FLIGHTS, "skyteam")).toEqual(["KL641","TK1","SQ25","UA90"]);
});

test("with \"star\"", () => {
  expect(flightsInAirlineRanked(FLIGHTS, "star")).toEqual(["AA100","IB6251"]);
});
