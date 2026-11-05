const CITIES = [
  {id: 1, name: "Accra", population: 3568, avgTemp: 15, continent: "Africa"},
  {id: 2, name: "Austin", population: 9006, avgTemp: 7, continent: "Asia"},
  {id: 3, name: "Turin", population: 2601, avgTemp: 3, continent: "Asia"},
  {id: 4, name: "Oslo", population: 1973, avgTemp: 9, continent: "Europe"},
  {id: 5, name: "Cairo", population: 2909, avgTemp: 17, continent: "Asia"},
  {id: 6, name: "Hanoi", population: 2650, avgTemp: 7, continent: "Europe"},
  {id: 7, name: "Perth", population: 4395, avgTemp: 13, continent: "Africa"},
  {id: 8, name: "Seoul", population: 4205, avgTemp: 13, continent: "Asia"}
];

test("with 1", () => {
  expect(nthByAvgTemp(CITIES, 1)).toEqual("Cairo");
});

test("with 2", () => {
  expect(nthByAvgTemp(CITIES, 2)).toEqual("Accra");
});

test("with 5", () => {
  expect(nthByAvgTemp(CITIES, 5)).toEqual("Oslo");
});

test("with 0", () => {
  expect(nthByAvgTemp(CITIES, 0)).toEqual(null);
});

test("with 99", () => {
  expect(nthByAvgTemp(CITIES, 99)).toEqual(null);
});
