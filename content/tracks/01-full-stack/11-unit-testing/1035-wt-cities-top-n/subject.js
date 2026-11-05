const CITIES = [
  {id: 1, name: "Accra", population: 7650, avgTemp: 14, continent: "Oceania"},
  {id: 2, name: "Seoul", population: 4232, avgTemp: 2, continent: "Asia"},
  {id: 3, name: "Hanoi", population: 3868, avgTemp: 28, continent: "Americas"},
  {id: 4, name: "Perth", population: 9450, avgTemp: 12, continent: "Asia"},
  {id: 5, name: "Quito", population: 1007, avgTemp: 22, continent: "Europe"},
  {id: 6, name: "Cairo", population: 6933, avgTemp: 17, continent: "Americas"},
  {id: 7, name: "Lisbon", population: 1975, avgTemp: 29, continent: "Asia"},
  {id: 8, name: "Turin", population: 9063, avgTemp: 27, continent: "Europe"}
];

function topCitiesByPopulation(cities, n) {
  return [...cities].sort((a, b) => b.population - a.population).slice(0, n).map((x) => x.name);
}
