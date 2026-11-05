const CITIES = [
  {id: 1, name: "Turin", population: 4931, avgTemp: 26, continent: "Asia"},
  {id: 2, name: "Austin", population: 7433, avgTemp: 15, continent: "Oceania"},
  {id: 3, name: "Accra", population: 4899, avgTemp: 8, continent: "Americas"},
  {id: 4, name: "Lima", population: 871, avgTemp: 21, continent: "Oceania"},
  {id: 5, name: "Oslo", population: 3526, avgTemp: 9, continent: "Oceania"},
  {id: 6, name: "Perth", population: 9639, avgTemp: 22, continent: "Oceania"},
  {id: 7, name: "Seoul", population: 3083, avgTemp: 22, continent: "Europe"},
  {id: 8, name: "Quito", population: 6427, avgTemp: 13, continent: "Africa"}
];

test("an empty list", () => {
  expect(countCitiesPerContinent([])).toEqual({});
});

test("all cities", () => {
  expect(countCitiesPerContinent(CITIES)).toEqual({"Asia":1,"Oceania":4,"Americas":1,"Europe":1,"Africa":1});
});
