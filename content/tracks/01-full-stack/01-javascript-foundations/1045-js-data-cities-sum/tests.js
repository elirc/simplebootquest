const CITIES = [
  {id: 1, name: "Seoul", population: 9007, avgTemp: 28, continent: "Europe"},
  {id: 2, name: "Cairo", population: 3168, avgTemp: 24, continent: "Europe"},
  {id: 3, name: "Austin", population: 2882, avgTemp: 8, continent: "Oceania"},
  {id: 4, name: "Lisbon", population: 2308, avgTemp: 28, continent: "Asia"},
  {id: 5, name: "Accra", population: 5907, avgTemp: 27, continent: "Europe"},
  {id: 6, name: "Perth", population: 9461, avgTemp: 28, continent: "Europe"},
  {id: 7, name: "Hanoi", population: 6305, avgTemp: 19, continent: "Americas"},
  {id: 8, name: "Turin", population: 7131, avgTemp: 7, continent: "Europe"}
];

test("an empty list", () => {
  expect(totalAvgTemp([])).toEqual(0);
});

test("all cities", () => {
  expect(totalAvgTemp(CITIES)).toEqual(169);
});
