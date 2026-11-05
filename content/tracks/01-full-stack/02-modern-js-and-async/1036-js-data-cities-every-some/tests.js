const CITIES = [
  {id: 1, name: "Quito", population: 5136, avgTemp: 6, continent: "Americas"},
  {id: 2, name: "Seoul", population: 8471, avgTemp: 16, continent: "Asia"},
  {id: 3, name: "Lima", population: 7924, avgTemp: 27, continent: "Americas"},
  {id: 4, name: "Accra", population: 2679, avgTemp: 17, continent: "Asia"},
  {id: 5, name: "Austin", population: 4531, avgTemp: 8, continent: "Africa"},
  {id: 6, name: "Lagos", population: 2522, avgTemp: 15, continent: "Europe"},
  {id: 7, name: "Oslo", population: 4786, avgTemp: 25, continent: "Americas"},
  {id: 8, name: "Turin", population: 7710, avgTemp: 22, continent: "Americas"}
];

test("with 4531", () => {
  expect(allCitiesUnder(CITIES, 4531)).toEqual(false);
});

test("with 8472", () => {
  expect(allCitiesUnder(CITIES, 8472)).toEqual(true);
});

test("with 8471", () => {
  expect(allCitiesUnder(CITIES, 8471)).toEqual(false);
});
