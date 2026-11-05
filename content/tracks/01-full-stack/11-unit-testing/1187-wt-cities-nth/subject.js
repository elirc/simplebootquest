const CITIES = [
  {id: 1, name: "Seoul", population: 1168, avgTemp: 26, continent: "Oceania"},
  {id: 2, name: "Austin", population: 1416, avgTemp: 18, continent: "Oceania"},
  {id: 3, name: "Perth", population: 4708, avgTemp: 17, continent: "Asia"},
  {id: 4, name: "Lagos", population: 7486, avgTemp: 6, continent: "Asia"},
  {id: 5, name: "Lisbon", population: 5367, avgTemp: 21, continent: "Oceania"},
  {id: 6, name: "Hanoi", population: 9490, avgTemp: 23, continent: "Oceania"},
  {id: 7, name: "Accra", population: 6926, avgTemp: 8, continent: "Europe"},
  {id: 8, name: "Quito", population: 6324, avgTemp: 17, continent: "Americas"}
];

function nthByAvgTemp(cities, n) {
  const sorted = [...cities].sort((a, b) => b.avgTemp - a.avgTemp);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
