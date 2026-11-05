const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 226, stars: 4, city: "Kyoto", breakfast: true},
  {id: 2, name: "Sky Garden", nightlyPrice: 266, stars: 4, city: "Toronto", breakfast: false},
  {id: 3, name: "The Grand", nightlyPrice: 267, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Northern Star", nightlyPrice: 239, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "Riverside Inn", nightlyPrice: 325, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Cityloft", nightlyPrice: 389, stars: 1, city: "Kyoto", breakfast: false},
  {id: 7, name: "Olive Court", nightlyPrice: 387, stars: 2, city: "Kyoto", breakfast: false},
  {id: 8, name: "Station Hotel", nightlyPrice: 359, stars: 2, city: "Toronto", breakfast: false}
];

test("with \"Riverside Inn\"", () => {
  expect(starsOf(HOTELS, "Riverside Inn")).toEqual(2);
});

test("with \"Nope\"", () => {
  expect(starsOf(HOTELS, "Nope")).toEqual(null);
});
