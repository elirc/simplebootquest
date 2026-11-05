const FLIGHTS = [
  {id: 1, number: "QF1", durationMin: 622, delayMin: 78, seats: 36, airline: "star"},
  {id: 2, number: "KL641", durationMin: 370, delayMin: 4, seats: 20, airline: "oneworld"},
  {id: 3, number: "BA117", durationMin: 224, delayMin: 29, seats: 36, airline: "skyteam"},
  {id: 4, number: "UA90", durationMin: 476, delayMin: 70, seats: 39, airline: "skyteam"},
  {id: 5, number: "EK3", durationMin: 270, delayMin: 95, seats: 3, airline: "skyteam"},
  {id: 6, number: "SQ25", durationMin: 101, delayMin: 83, seats: 9, airline: "oneworld"},
  {id: 7, number: "DL15", durationMin: 245, delayMin: 49, seats: 17, airline: "oneworld"},
  {id: 8, number: "AF22", durationMin: 705, delayMin: 169, seats: 47, airline: "star"}
];

test("an empty list", () => {
  expect(averageDelayMinPerAirline([])).toEqual({});
});

test("all flights", () => {
  expect(averageDelayMinPerAirline(FLIGHTS)).toEqual({"star":124,"oneworld":45,"skyteam":65});
});
