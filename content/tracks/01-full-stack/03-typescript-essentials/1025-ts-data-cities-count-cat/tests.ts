const CITIES = [
  {id: 1, name: "Quito", population: 9751, avgTemp: 11, continent: "Americas"},
  {id: 2, name: "Austin", population: 4362, avgTemp: 11, continent: "Americas"},
  {id: 3, name: "Lagos", population: 3704, avgTemp: 12, continent: "Asia"},
  {id: 4, name: "Hanoi", population: 6006, avgTemp: 6, continent: "Americas"},
  {id: 5, name: "Turin", population: 9480, avgTemp: 7, continent: "Americas"},
  {id: 6, name: "Cairo", population: 3509, avgTemp: 25, continent: "Asia"},
  {id: 7, name: "Seoul", population: 6894, avgTemp: 15, continent: "Americas"},
  {id: 8, name: "Oslo", population: 4028, avgTemp: 8, continent: "Africa"}
];

test("with \"Europe\"", () => {
  expect(countCitiesByContinent(CITIES, "Europe")).toEqual(0);
});

test("with \"Africa\"", () => {
  expect(countCitiesByContinent(CITIES, "Africa")).toEqual(1);
});

test("with \"Americas\"", () => {
  expect(countCitiesByContinent(CITIES, "Americas")).toEqual(5);
});

test("with \"nope\"", () => {
  expect(countCitiesByContinent(CITIES, "nope")).toEqual(0);
});
