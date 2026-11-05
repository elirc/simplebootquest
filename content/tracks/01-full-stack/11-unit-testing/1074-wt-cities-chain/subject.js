const CITIES = [
  {id: 1, name: "Cairo", population: 2808, avgTemp: 12, continent: "Africa"},
  {id: 2, name: "Accra", population: 3089, avgTemp: 27, continent: "Americas"},
  {id: 3, name: "Austin", population: 4511, avgTemp: 16, continent: "Oceania"},
  {id: 4, name: "Turin", population: 5129, avgTemp: 21, continent: "Asia"},
  {id: 5, name: "Quito", population: 7538, avgTemp: 10, continent: "Americas"},
  {id: 6, name: "Seoul", population: 8791, avgTemp: 22, continent: "Asia"},
  {id: 7, name: "Hanoi", population: 8226, avgTemp: 26, continent: "Oceania"},
  {id: 8, name: "Oslo", population: 703, avgTemp: 25, continent: "Africa"}
];

function citiesInContinentRanked(cities, value) {
  return cities
    .filter((x) => x.continent === value)
    .sort((a, b) => b.avgTemp - a.avgTemp)
    .map((x) => x.name);
}
