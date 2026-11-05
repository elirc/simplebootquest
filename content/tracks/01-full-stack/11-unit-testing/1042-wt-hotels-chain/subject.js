const HOTELS = [
  {id: 1, name: "Riverside Inn", nightlyPrice: 59, stars: 5, city: "Lisbon", breakfast: false},
  {id: 2, name: "Harbour View", nightlyPrice: 98, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 138, stars: 1, city: "Lisbon", breakfast: true},
  {id: 4, name: "Cityloft", nightlyPrice: 59, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Station Hotel", nightlyPrice: 200, stars: 5, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 87, stars: 3, city: "Kyoto", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 61, stars: 1, city: "Toronto", breakfast: true},
  {id: 8, name: "Sea Breeze", nightlyPrice: 178, stars: 4, city: "Toronto", breakfast: true}
];

function hotelsInCityRanked(hotels, value) {
  return hotels
    .filter((x) => x.city === value)
    .sort((a, b) => b.stars - a.stars)
    .map((x) => x.name);
}
