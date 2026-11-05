const CITIES = [
  {id: 1, name: "Seoul", population: 5587, avgTemp: 26, continent: "Europe"},
  {id: 2, name: "Cairo", population: 4881, avgTemp: 23, continent: "Americas"},
  {id: 3, name: "Accra", population: 4069, avgTemp: 10, continent: "Americas"},
  {id: 4, name: "Oslo", population: 4814, avgTemp: 10, continent: "Asia"},
  {id: 5, name: "Quito", population: 1912, avgTemp: 25, continent: "Africa"},
  {id: 6, name: "Austin", population: 7779, avgTemp: 7, continent: "Africa"},
  {id: 7, name: "Lima", population: 8498, avgTemp: 12, continent: "Americas"},
  {id: 8, name: "Lagos", population: 1189, avgTemp: 28, continent: "Americas"}
];

test("with \"Lagos\"", () => {
  expect(avgTempOf(CITIES, "Lagos")).toEqual(28);
});

test("with \"Nope\"", () => {
  expect(avgTempOf(CITIES, "Nope")).toEqual(null);
});
