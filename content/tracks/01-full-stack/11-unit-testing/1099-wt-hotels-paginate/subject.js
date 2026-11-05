const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 134, stars: 3, city: "Lisbon", breakfast: false},
  {id: 2, name: "Cityloft", nightlyPrice: 139, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Northern Star", nightlyPrice: 182, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 183, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Pine Lodge", nightlyPrice: 326, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Sky Garden", nightlyPrice: 117, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Old Mill", nightlyPrice: 147, stars: 4, city: "Kyoto", breakfast: true},
  {id: 8, name: "The Grand", nightlyPrice: 218, stars: 2, city: "Lisbon", breakfast: true}
];

function pageOfHotels(hotels, page, size) {
  const totalPages = Math.ceil(hotels.length / size);
  const items = hotels.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
