const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 278, stars: 4, city: "Lisbon", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 142, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "Riverside Inn", nightlyPrice: 298, stars: 2, city: "Toronto", breakfast: false},
  {id: 4, name: "Pine Lodge", nightlyPrice: 173, stars: 2, city: "Toronto", breakfast: true},
  {id: 5, name: "Sea Breeze", nightlyPrice: 98, stars: 3, city: "Kyoto", breakfast: false},
  {id: 6, name: "Olive Court", nightlyPrice: 374, stars: 4, city: "Toronto", breakfast: false},
  {id: 7, name: "Harbour View", nightlyPrice: 168, stars: 2, city: "Lisbon", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 85, stars: 2, city: "Toronto", breakfast: true}
];

test("an empty list", () => {
  expect(totalStars([])).toEqual(0);
});

test("all hotels", () => {
  expect(totalStars(HOTELS)).toEqual(20);
});
