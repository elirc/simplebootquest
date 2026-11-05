const FLIGHTS = [
  {id: 1, number: "BA117", durationMin: 427, delayMin: 113, seats: 26, airline: "oneworld"},
  {id: 2, number: "UA90", durationMin: 233, delayMin: 127, seats: 5, airline: "skyteam"},
  {id: 3, number: "AF22", durationMin: 477, delayMin: 147, seats: 19, airline: "skyteam"},
  {id: 4, number: "TK1", durationMin: 246, delayMin: 12, seats: 18, airline: "skyteam"},
  {id: 5, number: "QF1", durationMin: 502, delayMin: 157, seats: 2, airline: "skyteam"},
  {id: 6, number: "LH400", durationMin: 574, delayMin: 172, seats: 33, airline: "star"},
  {id: 7, number: "EK3", durationMin: 335, delayMin: 11, seats: 28, airline: "oneworld"},
  {id: 8, number: "KL641", durationMin: 566, delayMin: 29, seats: 38, airline: "skyteam"}
];

test("an empty list", () => {
  expect(seatsPerAirline([])).toEqual({});
});

test("all flights", () => {
  expect(seatsPerAirline(FLIGHTS)).toEqual({"oneworld":54,"skyteam":82,"star":33});
});
