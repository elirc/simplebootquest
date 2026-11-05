const CITIES = [
  {id: 1, name: "Austin", population: 3519, avgTemp: 2, continent: "Oceania"},
  {id: 2, name: "Seoul", population: 1935, avgTemp: 4, continent: "Asia"},
  {id: 3, name: "Cairo", population: 3809, avgTemp: 7, continent: "Africa"},
  {id: 4, name: "Oslo", population: 7201, avgTemp: 27, continent: "Europe"},
  {id: 5, name: "Lisbon", population: 5970, avgTemp: 10, continent: "Americas"},
  {id: 6, name: "Accra", population: 9612, avgTemp: 22, continent: "Americas"},
  {id: 7, name: "Quito", population: 1310, avgTemp: 7, continent: "Europe"},
  {id: 8, name: "Perth", population: 8162, avgTemp: 17, continent: "Oceania"}
];

test("with 2400", () => {
  expect(populationHistogram(CITIES, 2400)).toEqual({"0":2,"2400":2,"4800":1,"7200":2,"9600":1});
});

test("with 4800", () => {
  expect(populationHistogram(CITIES, 4800)).toEqual({"0":4,"4800":3,"9600":1});
});
