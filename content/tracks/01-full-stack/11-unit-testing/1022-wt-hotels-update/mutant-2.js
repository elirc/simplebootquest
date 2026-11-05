// mutant: mutates the original objects
const HOTELS = [
  {id: 1, name: "Northern Star", nightlyPrice: 244, stars: 1, city: "Toronto", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 94, stars: 2, city: "Toronto", breakfast: true},
  {id: 3, name: "Olive Court", nightlyPrice: 283, stars: 2, city: "Toronto", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 362, stars: 2, city: "Kyoto", breakfast: true},
  {id: 5, name: "Pine Lodge", nightlyPrice: 61, stars: 1, city: "Toronto", breakfast: true},
  {id: 6, name: "Cityloft", nightlyPrice: 68, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Old Mill", nightlyPrice: 302, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Riverside Inn", nightlyPrice: 334, stars: 4, city: "Kyoto", breakfast: true}
];

function bumpStars(hotels, value, amount) {
  return hotels.map((x) => (x.city === value ? Object.assign(x, { stars: x.stars + amount } : x));
}
