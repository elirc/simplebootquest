const FLIGHTS = [
  {id: 1, number: "EK3", durationMin: 559, delayMin: 104, seats: 41, airline: "star"},
  {id: 2, number: "KL641", durationMin: 99, delayMin: 20, seats: 34, airline: "oneworld"},
  {id: 3, number: "AA100", durationMin: 76, delayMin: 11, seats: 25, airline: "star"},
  {id: 4, number: "AF22", durationMin: 678, delayMin: 34, seats: 20, airline: "star"},
  {id: 5, number: "SQ25", durationMin: 258, delayMin: 25, seats: 21, airline: "skyteam"},
  {id: 6, number: "BA117", durationMin: 670, delayMin: 37, seats: 48, airline: "star"},
  {id: 7, number: "DL15", durationMin: 514, delayMin: 2, seats: 34, airline: "star"},
  {id: 8, number: "TK1", durationMin: 504, delayMin: 123, seats: 34, airline: "skyteam"}
];

test("an empty list", () => {
  expect(flightsById([])).toEqual({});
});

test("all flights", () => {
  expect(flightsById(FLIGHTS)).toEqual({"1":"EK3","2":"KL641","3":"AA100","4":"AF22","5":"SQ25","6":"BA117","7":"DL15","8":"TK1"});
});
