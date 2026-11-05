const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 277, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Station Hotel", nightlyPrice: 398, stars: 3, city: "Lisbon", breakfast: false},
  {id: 3, name: "Cityloft", nightlyPrice: 375, stars: 4, city: "Toronto", breakfast: true},
  {id: 4, name: "Maple House", nightlyPrice: 259, stars: 4, city: "Toronto", breakfast: false},
  {id: 5, name: "Pine Lodge", nightlyPrice: 175, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Riverside Inn", nightlyPrice: 334, stars: 3, city: "Lisbon", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 293, stars: 3, city: "Lisbon", breakfast: true},
  {id: 8, name: "Olive Court", nightlyPrice: 146, stars: 2, city: "Kyoto", breakfast: true}
];

test("with 95", () => {
  expect(nightlyPriceHistogram(HOTELS, 95)).toEqual({"95":2,"190":2,"285":3,"380":1});
});

test("with 190", () => {
  expect(nightlyPriceHistogram(HOTELS, 190)).toEqual({"0":2,"190":5,"380":1});
});
