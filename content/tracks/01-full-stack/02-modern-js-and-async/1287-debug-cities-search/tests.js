const CITIES = [
  {id: 1, name: "Accra", population: 9758, avgTemp: 20, continent: "Africa"},
  {id: 2, name: "Lagos", population: 9132, avgTemp: 26, continent: "Oceania"},
  {id: 3, name: "Cairo", population: 3082, avgTemp: 8, continent: "Europe"},
  {id: 4, name: "Turin", population: 4966, avgTemp: 6, continent: "Europe"},
  {id: 5, name: "Hanoi", population: 5339, avgTemp: 25, continent: "Oceania"},
  {id: 6, name: "Austin", population: 4444, avgTemp: 12, continent: "Americas"},
  {id: 7, name: "Seoul", population: 8580, avgTemp: 21, continent: "Oceania"},
  {id: 8, name: "Oslo", population: 9206, avgTemp: 27, continent: "Asia"}
];

test("with \"us\"", () => {
  expect(searchCities(CITIES, "us")).toEqual(["Austin"]);
});

test("with \"US\"", () => {
  expect(searchCities(CITIES, "US")).toEqual(["Austin"]);
});

test("with \"  \"", () => {
  expect(searchCities(CITIES, "  ")).toEqual(["Accra","Lagos","Cairo","Turin","Hanoi","Austin","Seoul","Oslo"]);
});

test("with \"zzz\"", () => {
  expect(searchCities(CITIES, "zzz")).toEqual([]);
});
