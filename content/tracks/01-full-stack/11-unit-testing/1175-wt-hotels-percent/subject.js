const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 294, stars: 2, city: "Toronto", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 252, stars: 2, city: "Kyoto", breakfast: true},
  {id: 3, name: "Olive Court", nightlyPrice: 325, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 134, stars: 5, city: "Lisbon", breakfast: false},
  {id: 5, name: "Harbour View", nightlyPrice: 142, stars: 2, city: "Kyoto", breakfast: false},
  {id: 6, name: "Sky Garden", nightlyPrice: 176, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Riverside Inn", nightlyPrice: 246, stars: 1, city: "Lisbon", breakfast: true},
  {id: 8, name: "Pine Lodge", nightlyPrice: 228, stars: 3, city: "Toronto", breakfast: true}
];

function percentBreakfast(hotels) {
  if (hotels.length === 0) return 0;
  return Math.round((hotels.filter((x) => x.breakfast).length / hotels.length) * 100);
}
