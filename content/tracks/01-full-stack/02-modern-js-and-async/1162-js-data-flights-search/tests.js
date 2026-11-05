const FLIGHTS = [
  {id: 1, number: "LH400", durationMin: 135, delayMin: 98, seats: 19, airline: "skyteam"},
  {id: 2, number: "AF22", durationMin: 748, delayMin: 62, seats: 11, airline: "oneworld"},
  {id: 3, number: "AA100", durationMin: 744, delayMin: 171, seats: 25, airline: "oneworld"},
  {id: 4, number: "DL15", durationMin: 540, delayMin: 108, seats: 20, airline: "skyteam"},
  {id: 5, number: "QF1", durationMin: 512, delayMin: 57, seats: 17, airline: "skyteam"},
  {id: 6, number: "BA117", durationMin: 83, delayMin: 66, seats: 18, airline: "star"},
  {id: 7, number: "TK1", durationMin: 325, delayMin: 38, seats: 7, airline: "skyteam"},
  {id: 8, number: "KL641", durationMin: 337, delayMin: 144, seats: 41, airline: "skyteam"}
];

test("with \"f2\"", () => {
  expect(searchFlights(FLIGHTS, "f2")).toEqual(["AF22"]);
});

test("with \"F2\"", () => {
  expect(searchFlights(FLIGHTS, "F2")).toEqual(["AF22"]);
});

test("with \"  \"", () => {
  expect(searchFlights(FLIGHTS, "  ")).toEqual(["LH400","AF22","AA100","DL15","QF1","BA117","TK1","KL641"]);
});

test("with \"zzz\"", () => {
  expect(searchFlights(FLIGHTS, "zzz")).toEqual([]);
});
