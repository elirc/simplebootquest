const CITIES = [
  {id: 1, name: "Accra", population: 2498, avgTemp: 16, continent: "Europe"},
  {id: 2, name: "Lagos", population: 479, avgTemp: 15, continent: "Europe"},
  {id: 3, name: "Cairo", population: 620, avgTemp: 29, continent: "Asia"},
  {id: 4, name: "Quito", population: 3611, avgTemp: 17, continent: "Oceania"},
  {id: 5, name: "Lima", population: 1271, avgTemp: 12, continent: "Europe"},
  {id: 6, name: "Perth", population: 4779, avgTemp: 24, continent: "Oceania"},
  {id: 7, name: "Seoul", population: 6464, avgTemp: 13, continent: "Oceania"},
  {id: 8, name: "Hanoi", population: 4981, avgTemp: 29, continent: "Africa"}
];

test("an empty list", () => {
  expect(lowestAvgTemp([])).toEqual(null);
});

test("all cities", () => {
  expect(lowestAvgTemp(CITIES)).toEqual("Lima");
});
