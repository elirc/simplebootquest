const CITIES = [
  {id: 1, name: "Hanoi", population: 2263, avgTemp: 24, continent: "Europe"},
  {id: 2, name: "Lisbon", population: 9334, avgTemp: 28, continent: "Africa"},
  {id: 3, name: "Turin", population: 5339, avgTemp: 11, continent: "Americas"},
  {id: 4, name: "Perth", population: 3616, avgTemp: 15, continent: "Europe"},
  {id: 5, name: "Accra", population: 1235, avgTemp: 19, continent: "Europe"},
  {id: 6, name: "Seoul", population: 2248, avgTemp: 8, continent: "Asia"},
  {id: 7, name: "Cairo", population: 2112, avgTemp: 21, continent: "Europe"},
  {id: 8, name: "Oslo", population: 3317, avgTemp: 3, continent: "Americas"}
];

test("with \"Europe\"", () => {
  expect(countCitiesByContinent(CITIES, "Europe")).toEqual(4);
});

test("with \"Africa\"", () => {
  expect(countCitiesByContinent(CITIES, "Africa")).toEqual(1);
});

test("with \"Americas\"", () => {
  expect(countCitiesByContinent(CITIES, "Americas")).toEqual(2);
});

test("with \"nope\"", () => {
  expect(countCitiesByContinent(CITIES, "nope")).toEqual(0);
});
