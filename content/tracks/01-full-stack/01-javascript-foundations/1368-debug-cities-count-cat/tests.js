const CITIES = [
  {id: 1, name: "Turin", population: 4769, avgTemp: 22, continent: "Americas"},
  {id: 2, name: "Accra", population: 2196, avgTemp: 18, continent: "Europe"},
  {id: 3, name: "Perth", population: 301, avgTemp: 24, continent: "Oceania"},
  {id: 4, name: "Lima", population: 7708, avgTemp: 24, continent: "Europe"},
  {id: 5, name: "Lagos", population: 7173, avgTemp: 8, continent: "Europe"},
  {id: 6, name: "Quito", population: 6397, avgTemp: 12, continent: "Africa"},
  {id: 7, name: "Cairo", population: 410, avgTemp: 10, continent: "Americas"},
  {id: 8, name: "Seoul", population: 7929, avgTemp: 15, continent: "Europe"}
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
