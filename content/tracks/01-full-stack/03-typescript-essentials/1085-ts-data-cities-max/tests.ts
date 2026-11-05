const CITIES = [
  {id: 1, name: "Turin", population: 9044, avgTemp: 15, continent: "Africa"},
  {id: 2, name: "Oslo", population: 7901, avgTemp: 20, continent: "Americas"},
  {id: 3, name: "Lagos", population: 5351, avgTemp: 22, continent: "Africa"},
  {id: 4, name: "Hanoi", population: 6243, avgTemp: 7, continent: "Europe"},
  {id: 5, name: "Seoul", population: 8025, avgTemp: 6, continent: "Oceania"},
  {id: 6, name: "Lisbon", population: 7851, avgTemp: 25, continent: "Europe"},
  {id: 7, name: "Cairo", population: 7691, avgTemp: 9, continent: "Asia"},
  {id: 8, name: "Quito", population: 1328, avgTemp: 19, continent: "Asia"}
];

test("an empty list", () => {
  expect(highestAvgTemp([])).toEqual(null);
});

test("all cities", () => {
  expect(highestAvgTemp(CITIES)).toEqual("Lisbon");
});
