const CITIES = [
  {id: 1, name: "Lisbon", population: 9302, avgTemp: 20, continent: "Asia"},
  {id: 2, name: "Lima", population: 6456, avgTemp: 13, continent: "Africa"},
  {id: 3, name: "Austin", population: 7812, avgTemp: 3, continent: "Africa"},
  {id: 4, name: "Cairo", population: 479, avgTemp: 6, continent: "Oceania"},
  {id: 5, name: "Quito", population: 5439, avgTemp: 22, continent: "Europe"},
  {id: 6, name: "Accra", population: 8823, avgTemp: 29, continent: "Americas"},
  {id: 7, name: "Perth", population: 4335, avgTemp: 2, continent: "Africa"},
  {id: 8, name: "Seoul", population: 5996, avgTemp: 24, continent: "Americas"}
];

test("with \"Europe\"", () => {
  expect(citiesInContinentRanked(CITIES, "Europe")).toEqual(["Quito"]);
});

test("with \"Africa\"", () => {
  expect(citiesInContinentRanked(CITIES, "Africa")).toEqual(["Lima","Austin","Perth"]);
});

test("with \"Americas\"", () => {
  expect(citiesInContinentRanked(CITIES, "Americas")).toEqual(["Accra","Seoul"]);
});
