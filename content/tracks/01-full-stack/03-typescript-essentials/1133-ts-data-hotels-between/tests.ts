const HOTELS = [
  {id: 1, name: "Old Mill", nightlyPrice: 228, stars: 5, city: "Kyoto", breakfast: false},
  {id: 2, name: "Riverside Inn", nightlyPrice: 93, stars: 1, city: "Toronto", breakfast: true},
  {id: 3, name: "The Grand", nightlyPrice: 155, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 91, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "Pine Lodge", nightlyPrice: 168, stars: 3, city: "Toronto", breakfast: false},
  {id: 6, name: "Sky Garden", nightlyPrice: 50, stars: 5, city: "Toronto", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 66, stars: 4, city: "Lisbon", breakfast: true},
  {id: 8, name: "Maple House", nightlyPrice: 240, stars: 5, city: "Kyoto", breakfast: false}
];

test("with 3, 4", () => {
  expect(hotelsInRange(HOTELS, 3, 4)).toEqual(["The Grand","Cityloft","Pine Lodge","Northern Star"]);
});

test("with 4, 5", () => {
  expect(hotelsInRange(HOTELS, 4, 5)).toEqual(["Old Mill","Cityloft","Sky Garden","Northern Star","Maple House"]);
});

test("with 3, 3", () => {
  expect(hotelsInRange(HOTELS, 3, 3)).toEqual(["The Grand","Pine Lodge"]);
});
