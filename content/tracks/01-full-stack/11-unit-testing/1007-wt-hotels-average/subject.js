const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 149, stars: 1, city: "Kyoto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 238, stars: 5, city: "Toronto", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 137, stars: 1, city: "Lisbon", breakfast: true},
  {id: 4, name: "Sea Breeze", nightlyPrice: 266, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "The Grand", nightlyPrice: 247, stars: 1, city: "Toronto", breakfast: true},
  {id: 6, name: "Old Mill", nightlyPrice: 130, stars: 1, city: "Kyoto", breakfast: true},
  {id: 7, name: "Maple House", nightlyPrice: 401, stars: 4, city: "Kyoto", breakfast: true},
  {id: 8, name: "Station Hotel", nightlyPrice: 236, stars: 2, city: "Kyoto", breakfast: false}
];

function averageStars(hotels) {
  if (hotels.length === 0) return null;
  const total = hotels.reduce((sum, x) => sum + x.stars, 0);
  return Math.round((total / hotels.length) * 10) / 10;
}
