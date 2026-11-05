// mutant: sort direction reversed
const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 375, stars: 2, city: "Toronto", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 208, stars: 4, city: "Toronto", breakfast: true},
  {id: 3, name: "Sea Breeze", nightlyPrice: 283, stars: 4, city: "Kyoto", breakfast: false},
  {id: 4, name: "Pine Lodge", nightlyPrice: 275, stars: 3, city: "Lisbon", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 189, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Sky Garden", nightlyPrice: 104, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Riverside Inn", nightlyPrice: 152, stars: 4, city: "Kyoto", breakfast: true},
  {id: 8, name: "Harbour View", nightlyPrice: 395, stars: 2, city: "Lisbon", breakfast: true}
];

function hotelsByNightlyPrice(hotels) {
  return [...hotels].sort((a, b) => b.nightlyPrice - a.nightlyPrice).map((x) => x.name);
}
