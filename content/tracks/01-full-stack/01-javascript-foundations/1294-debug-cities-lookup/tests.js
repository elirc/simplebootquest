const CITIES = [
  {id: 1, name: "Lagos", population: 7237, avgTemp: 2, continent: "Europe"},
  {id: 2, name: "Hanoi", population: 1699, avgTemp: 28, continent: "Oceania"},
  {id: 3, name: "Lima", population: 6698, avgTemp: 11, continent: "Oceania"},
  {id: 4, name: "Quito", population: 9074, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Perth", population: 3791, avgTemp: 6, continent: "Europe"},
  {id: 6, name: "Accra", population: 8878, avgTemp: 6, continent: "Africa"},
  {id: 7, name: "Oslo", population: 1503, avgTemp: 23, continent: "Europe"},
  {id: 8, name: "Cairo", population: 1520, avgTemp: 14, continent: "Oceania"}
];

test("with \"Oslo\"", () => {
  expect(avgTempOf(CITIES, "Oslo")).toEqual(23);
});

test("with \"Nope\"", () => {
  expect(avgTempOf(CITIES, "Nope")).toEqual(null);
});
