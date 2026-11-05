const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 87, stars: 4, city: "Kyoto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 62, stars: 1, city: "Toronto", breakfast: false},
  {id: 3, name: "Sky Garden", nightlyPrice: 77, stars: 3, city: "Toronto", breakfast: true},
  {id: 4, name: "Old Mill", nightlyPrice: 76, stars: 3, city: "Kyoto", breakfast: true},
  {id: 5, name: "Harbour View", nightlyPrice: 176, stars: 3, city: "Lisbon", breakfast: false},
  {id: 6, name: "Sea Breeze", nightlyPrice: 82, stars: 1, city: "Lisbon", breakfast: false},
  {id: 7, name: "The Grand", nightlyPrice: 233, stars: 2, city: "Lisbon", breakfast: true},
  {id: 8, name: "Olive Court", nightlyPrice: 408, stars: 2, city: "Kyoto", breakfast: true}
];

test("with \"The Grand\"", () => {
  expect(starsOf(HOTELS, "The Grand")).toEqual(2);
});

test("with \"Nope\"", () => {
  expect(starsOf(HOTELS, "Nope")).toEqual(null);
});
