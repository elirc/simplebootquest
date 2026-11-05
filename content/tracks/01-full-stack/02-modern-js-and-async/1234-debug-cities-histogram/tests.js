const CITIES = [
  {id: 1, name: "Oslo", population: 5065, avgTemp: 23, continent: "Americas"},
  {id: 2, name: "Cairo", population: 3044, avgTemp: 18, continent: "Asia"},
  {id: 3, name: "Lagos", population: 8419, avgTemp: 13, continent: "Americas"},
  {id: 4, name: "Turin", population: 2814, avgTemp: 27, continent: "Asia"},
  {id: 5, name: "Lima", population: 711, avgTemp: 14, continent: "Africa"},
  {id: 6, name: "Accra", population: 8353, avgTemp: 26, continent: "Oceania"},
  {id: 7, name: "Lisbon", population: 9075, avgTemp: 22, continent: "Europe"},
  {id: 8, name: "Perth", population: 759, avgTemp: 27, continent: "Europe"}
];

test("with 2400", () => {
  expect(populationHistogram(CITIES, 2400)).toEqual({"0":2,"2400":2,"4800":1,"7200":3});
});

test("with 4800", () => {
  expect(populationHistogram(CITIES, 4800)).toEqual({"0":4,"4800":4});
});
