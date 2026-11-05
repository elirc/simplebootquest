const HOTELS = [
  {id: 1, name: "Sea Breeze", nightlyPrice: 243, stars: 3, city: "Kyoto", breakfast: false},
  {id: 2, name: "Harbour View", nightlyPrice: 61, stars: 4, city: "Kyoto", breakfast: false},
  {id: 3, name: "The Grand", nightlyPrice: 373, stars: 5, city: "Toronto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 282, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Sky Garden", nightlyPrice: 391, stars: 1, city: "Kyoto", breakfast: false},
  {id: 6, name: "Northern Star", nightlyPrice: 86, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Olive Court", nightlyPrice: 292, stars: 3, city: "Lisbon", breakfast: false},
  {id: 8, name: "Riverside Inn", nightlyPrice: 116, stars: 3, city: "Kyoto", breakfast: false}
];

test("an empty list", () => {
  expect(averageStars([])).toEqual(null);
});

test("all hotels", () => {
  expect(averageStars(HOTELS)).toEqual(2.8);
});
