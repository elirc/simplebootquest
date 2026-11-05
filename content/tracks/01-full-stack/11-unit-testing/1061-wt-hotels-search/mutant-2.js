// mutant: input is no longer trimmed
const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 333, stars: 5, city: "Toronto", breakfast: true},
  {id: 2, name: "Harbour View", nightlyPrice: 242, stars: 1, city: "Kyoto", breakfast: false},
  {id: 3, name: "Old Mill", nightlyPrice: 50, stars: 5, city: "Lisbon", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 168, stars: 3, city: "Lisbon", breakfast: true},
  {id: 5, name: "Sky Garden", nightlyPrice: 171, stars: 3, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 48, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 376, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "The Grand", nightlyPrice: 49, stars: 3, city: "Kyoto", breakfast: true}
];

function searchHotels(hotels, query) {
  const q = query.toLowerCase();
  return hotels.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
