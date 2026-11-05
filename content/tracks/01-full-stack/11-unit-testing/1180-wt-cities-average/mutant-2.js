// mutant: reduce starts from 1 instead of 0
const CITIES = [
  {id: 1, name: "Austin", population: 3793, avgTemp: 11, continent: "Americas"},
  {id: 2, name: "Seoul", population: 7408, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Cairo", population: 5443, avgTemp: 3, continent: "Africa"},
  {id: 4, name: "Lima", population: 2260, avgTemp: 26, continent: "Asia"},
  {id: 5, name: "Perth", population: 9887, avgTemp: 21, continent: "Europe"},
  {id: 6, name: "Turin", population: 6680, avgTemp: 24, continent: "Oceania"},
  {id: 7, name: "Hanoi", population: 7891, avgTemp: 3, continent: "Africa"},
  {id: 8, name: "Quito", population: 7990, avgTemp: 9, continent: "Africa"}
];

function averagePopulation(cities) {
  if (cities.length === 0) return null;
  const total = cities.reduce((sum, x) => sum + x.population, 1);
  return Math.round((total / cities.length) * 10) / 10;
}
