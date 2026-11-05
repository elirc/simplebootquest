const HOTELS = [
  {id: 1, name: "Pine Lodge", nightlyPrice: 231, stars: 2, city: "Kyoto", breakfast: false},
  {id: 2, name: "Northern Star", nightlyPrice: 368, stars: 4, city: "Lisbon", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 316, stars: 3, city: "Toronto", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 304, stars: 4, city: "Kyoto", breakfast: true},
  {id: 5, name: "Riverside Inn", nightlyPrice: 128, stars: 4, city: "Kyoto", breakfast: false},
  {id: 6, name: "Olive Court", nightlyPrice: 159, stars: 3, city: "Toronto", breakfast: false},
  {id: 7, name: "Maple House", nightlyPrice: 166, stars: 3, city: "Kyoto", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 344, stars: 4, city: "Lisbon", breakfast: true}
];

test("an empty list", () => {
  expect(highestStars([])).toEqual(null);
});

test("all hotels", () => {
  expect(highestStars(HOTELS)).toEqual("Northern Star");
});
