const BEFORE = [
  {id: 1, name: "Lima", population: 2785, avgTemp: 21, continent: "Asia"},
  {id: 2, name: "Lagos", population: 9813, avgTemp: 19, continent: "Europe"},
  {id: 3, name: "Austin", population: 1270, avgTemp: 9, continent: "Europe"},
  {id: 4, name: "Accra", population: 2510, avgTemp: 13, continent: "Americas"},
  {id: 5, name: "Oslo", population: 9441, avgTemp: 17, continent: "Americas"},
  {id: 6, name: "Hanoi", population: 1290, avgTemp: 12, continent: "Americas"},
  {id: 7, name: "Perth", population: 447, avgTemp: 12, continent: "Oceania"},
  {id: 8, name: "Cairo", population: 842, avgTemp: 24, continent: "Asia"}
];
const AFTER = [
  {id: 1, name: "Lima", population: 2785, avgTemp: 21, continent: "Asia"},
  {id: 2, name: "Lagos", population: 9820, avgTemp: 19, continent: "Europe"},
  {id: 3, name: "Austin", population: 1270, avgTemp: 9, continent: "Europe"},
  {id: 4, name: "Accra", population: 2510, avgTemp: 13, continent: "Americas"},
  {id: 5, name: "Oslo", population: 9448, avgTemp: 17, continent: "Americas"},
  {id: 6, name: "Hanoi", population: 1290, avgTemp: 12, continent: "Americas"},
  {id: 7, name: "Perth", population: 447, avgTemp: 12, continent: "Oceania"},
  {id: 8, name: "Cairo", population: 849, avgTemp: 24, continent: "Asia"}
];

test("finds changed ids", () => {
  expect(populationChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(populationChanges(BEFORE, BEFORE)).toEqual([]);
});
