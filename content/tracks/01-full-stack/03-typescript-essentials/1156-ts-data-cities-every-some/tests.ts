const CITIES = [
  {id: 1, name: "Seoul", population: 6582, avgTemp: 24, continent: "Asia"},
  {id: 2, name: "Hanoi", population: 2932, avgTemp: 6, continent: "Europe"},
  {id: 3, name: "Oslo", population: 7104, avgTemp: 9, continent: "Oceania"},
  {id: 4, name: "Cairo", population: 3899, avgTemp: 13, continent: "Asia"},
  {id: 5, name: "Perth", population: 3730, avgTemp: 13, continent: "Europe"},
  {id: 6, name: "Accra", population: 9097, avgTemp: 7, continent: "Africa"},
  {id: 7, name: "Turin", population: 2479, avgTemp: 15, continent: "Asia"},
  {id: 8, name: "Lisbon", population: 2270, avgTemp: 10, continent: "Asia"}
];

test("with 2932", () => {
  expect(allCitiesUnder(CITIES, 2932)).toEqual(false);
});

test("with 9098", () => {
  expect(allCitiesUnder(CITIES, 9098)).toEqual(true);
});

test("with 9097", () => {
  expect(allCitiesUnder(CITIES, 9097)).toEqual(false);
});
