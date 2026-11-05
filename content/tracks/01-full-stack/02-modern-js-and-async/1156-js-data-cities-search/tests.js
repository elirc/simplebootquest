const CITIES = [
  {id: 1, name: "Quito", population: 1553, avgTemp: 18, continent: "Europe"},
  {id: 2, name: "Seoul", population: 3421, avgTemp: 2, continent: "Americas"},
  {id: 3, name: "Hanoi", population: 1836, avgTemp: 15, continent: "Europe"},
  {id: 4, name: "Accra", population: 634, avgTemp: 16, continent: "Americas"},
  {id: 5, name: "Austin", population: 8380, avgTemp: 21, continent: "Oceania"},
  {id: 6, name: "Turin", population: 4223, avgTemp: 5, continent: "Asia"},
  {id: 7, name: "Cairo", population: 2832, avgTemp: 27, continent: "Americas"},
  {id: 8, name: "Lima", population: 4753, avgTemp: 26, continent: "Americas"}
];

test("with \"an\"", () => {
  expect(searchCities(CITIES, "an")).toEqual(["Hanoi"]);
});

test("with \"AN\"", () => {
  expect(searchCities(CITIES, "AN")).toEqual(["Hanoi"]);
});

test("with \"  \"", () => {
  expect(searchCities(CITIES, "  ")).toEqual(["Quito","Seoul","Hanoi","Accra","Austin","Turin","Cairo","Lima"]);
});

test("with \"zzz\"", () => {
  expect(searchCities(CITIES, "zzz")).toEqual([]);
});
