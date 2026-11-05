// mutant: boundary: `<=` became `<`
const HOTELS = [
  {id: 1, name: "Cityloft", nightlyPrice: 355, stars: 3, city: "Toronto", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 114, stars: 2, city: "Lisbon", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 140, stars: 2, city: "Kyoto", breakfast: true},
  {id: 4, name: "Sea Breeze", nightlyPrice: 211, stars: 4, city: "Lisbon", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 201, stars: 4, city: "Lisbon", breakfast: true},
  {id: 6, name: "Riverside Inn", nightlyPrice: 272, stars: 1, city: "Toronto", breakfast: true},
  {id: 7, name: "Pine Lodge", nightlyPrice: 418, stars: 4, city: "Lisbon", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 186, stars: 5, city: "Kyoto", breakfast: true}
];

function hotelsInRange(hotels, low, high) {
  return hotels.filter((x) => x.nightlyPrice >= low && x.nightlyPrice < high).map((x) => x.name);
}
