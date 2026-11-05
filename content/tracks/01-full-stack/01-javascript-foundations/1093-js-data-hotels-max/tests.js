const HOTELS = [
  {id: 1, name: "The Grand", nightlyPrice: 306, stars: 4, city: "Kyoto", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 77, stars: 3, city: "Toronto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 191, stars: 4, city: "Toronto", breakfast: true},
  {id: 4, name: "Cityloft", nightlyPrice: 397, stars: 3, city: "Toronto", breakfast: true},
  {id: 5, name: "Sea Breeze", nightlyPrice: 390, stars: 4, city: "Lisbon", breakfast: false},
  {id: 6, name: "Riverside Inn", nightlyPrice: 154, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Olive Court", nightlyPrice: 257, stars: 2, city: "Kyoto", breakfast: true},
  {id: 8, name: "Station Hotel", nightlyPrice: 340, stars: 3, city: "Kyoto", breakfast: false}
];

test("an empty list", () => {
  expect(highestStars([])).toEqual(null);
});

test("all hotels", () => {
  expect(highestStars(HOTELS)).toEqual("The Grand");
});
