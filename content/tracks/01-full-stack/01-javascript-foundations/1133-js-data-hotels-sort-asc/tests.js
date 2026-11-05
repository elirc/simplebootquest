const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 171, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Harbour View", nightlyPrice: 210, stars: 1, city: "Lisbon", breakfast: true},
  {id: 3, name: "Old Mill", nightlyPrice: 356, stars: 3, city: "Kyoto", breakfast: true},
  {id: 4, name: "Sea Breeze", nightlyPrice: 209, stars: 4, city: "Toronto", breakfast: true},
  {id: 5, name: "Cityloft", nightlyPrice: 90, stars: 5, city: "Kyoto", breakfast: true},
  {id: 6, name: "Pine Lodge", nightlyPrice: 88, stars: 4, city: "Lisbon", breakfast: true},
  {id: 7, name: "The Grand", nightlyPrice: 340, stars: 3, city: "Kyoto", breakfast: true},
  {id: 8, name: "Riverside Inn", nightlyPrice: 410, stars: 5, city: "Kyoto", breakfast: false}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(HOTELS);
  hotelsByStars(HOTELS);
  expect(JSON.stringify(HOTELS)).toBe(before);
});

test("all hotels", () => {
  expect(hotelsByStars(HOTELS)).toEqual(["Harbour View","Old Mill","The Grand","Sky Garden","Sea Breeze","Pine Lodge","Cityloft","Riverside Inn"]);
});
