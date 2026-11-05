const HOTELS = [
  {id: 1, name: "Riverside Inn", nightlyPrice: 73, stars: 1, city: "Lisbon", breakfast: false},
  {id: 2, name: "Maple House", nightlyPrice: 384, stars: 1, city: "Kyoto", breakfast: true},
  {id: 3, name: "Sky Garden", nightlyPrice: 362, stars: 4, city: "Toronto", breakfast: false},
  {id: 4, name: "Northern Star", nightlyPrice: 226, stars: 3, city: "Kyoto", breakfast: false},
  {id: 5, name: "Harbour View", nightlyPrice: 66, stars: 2, city: "Lisbon", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 82, stars: 5, city: "Lisbon", breakfast: false},
  {id: 7, name: "Cityloft", nightlyPrice: 355, stars: 3, city: "Toronto", breakfast: true},
  {id: 8, name: "Sea Breeze", nightlyPrice: 87, stars: 2, city: "Kyoto", breakfast: false}
];

test("with 95", () => {
  expect(nightlyPriceHistogram(HOTELS, 95)).toEqual({"0":4,"190":1,"285":2,"380":1});
});

test("with 190", () => {
  expect(nightlyPriceHistogram(HOTELS, 190)).toEqual({"0":4,"190":3,"380":1});
});
