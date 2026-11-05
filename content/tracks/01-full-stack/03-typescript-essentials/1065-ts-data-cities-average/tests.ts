const CITIES = [
  {id: 1, name: "Turin", population: 7363, avgTemp: 16, continent: "Oceania"},
  {id: 2, name: "Accra", population: 1784, avgTemp: 11, continent: "Asia"},
  {id: 3, name: "Hanoi", population: 6659, avgTemp: 15, continent: "Africa"},
  {id: 4, name: "Quito", population: 2084, avgTemp: 5, continent: "Europe"},
  {id: 5, name: "Lima", population: 7280, avgTemp: 2, continent: "Americas"},
  {id: 6, name: "Oslo", population: 1427, avgTemp: 9, continent: "Africa"},
  {id: 7, name: "Lisbon", population: 6280, avgTemp: 2, continent: "Europe"},
  {id: 8, name: "Cairo", population: 9123, avgTemp: 14, continent: "Americas"}
];

test("an empty list", () => {
  expect(averageAvgTemp([])).toEqual(null);
});

test("all cities", () => {
  expect(averageAvgTemp(CITIES)).toEqual(9.3);
});
