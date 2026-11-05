const FLIGHTS = [
  {id: 1, number: "EK3", durationMin: 76, delayMin: 153, seats: 14, airline: "star"},
  {id: 2, number: "LH400", durationMin: 297, delayMin: 5, seats: 48, airline: "star"},
  {id: 3, number: "TK1", durationMin: 683, delayMin: 83, seats: 8, airline: "skyteam"},
  {id: 4, number: "AA100", durationMin: 184, delayMin: 178, seats: 26, airline: "oneworld"},
  {id: 5, number: "SQ25", durationMin: 788, delayMin: 67, seats: 21, airline: "star"},
  {id: 6, number: "KL641", durationMin: 562, delayMin: 40, seats: 3, airline: "oneworld"},
  {id: 7, number: "AF22", durationMin: 331, delayMin: 19, seats: 28, airline: "oneworld"},
  {id: 8, number: "UA90", durationMin: 711, delayMin: 130, seats: 19, airline: "star"}
];

test("with \"oneworld\"", () => {
  expect(flightsInAirlineRanked(FLIGHTS, "oneworld")).toEqual(["AA100","KL641","AF22"]);
});

test("with \"skyteam\"", () => {
  expect(flightsInAirlineRanked(FLIGHTS, "skyteam")).toEqual(["TK1"]);
});

test("with \"star\"", () => {
  expect(flightsInAirlineRanked(FLIGHTS, "star")).toEqual(["EK3","UA90","SQ25","LH400"]);
});
