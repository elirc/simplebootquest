const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 205, stars: 2, city: "Kyoto", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 196, stars: 3, city: "Kyoto", breakfast: true},
  {id: 3, name: "Pine Lodge", nightlyPrice: 297, stars: 3, city: "Lisbon", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 146, stars: 5, city: "Toronto", breakfast: true},
  {id: 5, name: "Maple House", nightlyPrice: 316, stars: 4, city: "Toronto", breakfast: true},
  {id: 6, name: "The Grand", nightlyPrice: 282, stars: 4, city: "Kyoto", breakfast: true},
  {id: 7, name: "Northern Star", nightlyPrice: 180, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Sky Garden", nightlyPrice: 169, stars: 2, city: "Kyoto", breakfast: false}
];

test("an empty list", () => {
  expect(totalStars([])).toEqual(0);
});

test("all hotels", () => {
  expect(totalStars(HOTELS)).toEqual(27);
});
