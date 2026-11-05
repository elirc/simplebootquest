// mutant: sort direction reversed
const HOTELS = [
  {id: 1, name: "Pine Lodge", nightlyPrice: 258, stars: 2, city: "Lisbon", breakfast: false},
  {id: 2, name: "Station Hotel", nightlyPrice: 257, stars: 4, city: "Kyoto", breakfast: true},
  {id: 3, name: "Northern Star", nightlyPrice: 170, stars: 3, city: "Lisbon", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 91, stars: 1, city: "Toronto", breakfast: false},
  {id: 5, name: "Olive Court", nightlyPrice: 50, stars: 1, city: "Kyoto", breakfast: true},
  {id: 6, name: "Cityloft", nightlyPrice: 419, stars: 2, city: "Lisbon", breakfast: false},
  {id: 7, name: "Riverside Inn", nightlyPrice: 92, stars: 4, city: "Toronto", breakfast: false},
  {id: 8, name: "Maple House", nightlyPrice: 158, stars: 4, city: "Lisbon", breakfast: true}
];

function topHotelsByNightlyPrice(hotels, n) {
  return [...hotels].sort((a, b) => a.nightlyPrice - b.nightlyPrice).slice(0, n).map((x) => x.name);
}
