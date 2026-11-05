// mutant: sort direction reversed
const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 155, stars: 3, city: "Kyoto", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 312, stars: 3, city: "Toronto", breakfast: false},
  {id: 3, name: "Pine Lodge", nightlyPrice: 124, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 419, stars: 4, city: "Toronto", breakfast: true},
  {id: 5, name: "The Grand", nightlyPrice: 153, stars: 1, city: "Lisbon", breakfast: true},
  {id: 6, name: "Harbour View", nightlyPrice: 74, stars: 2, city: "Kyoto", breakfast: true},
  {id: 7, name: "Cityloft", nightlyPrice: 71, stars: 5, city: "Kyoto", breakfast: true},
  {id: 8, name: "Sea Breeze", nightlyPrice: 66, stars: 2, city: "Toronto", breakfast: false}
];

function nthByNightlyPrice(hotels, n) {
  const sorted = [...hotels].sort((a, b) => a.nightlyPrice - b.nightlyPrice);
  return n >= 1 && n <= sorted.length ? sorted[n - 1].name : null;
}
