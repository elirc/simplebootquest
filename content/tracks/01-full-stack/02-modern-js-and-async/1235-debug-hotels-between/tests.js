const HOTELS = [
  {id: 1, name: "Maple House", nightlyPrice: 385, stars: 1, city: "Kyoto", breakfast: true},
  {id: 2, name: "The Grand", nightlyPrice: 367, stars: 3, city: "Lisbon", breakfast: false},
  {id: 3, name: "Station Hotel", nightlyPrice: 177, stars: 1, city: "Toronto", breakfast: true},
  {id: 4, name: "Harbour View", nightlyPrice: 393, stars: 2, city: "Lisbon", breakfast: true},
  {id: 5, name: "Sky Garden", nightlyPrice: 357, stars: 2, city: "Lisbon", breakfast: true},
  {id: 6, name: "Olive Court", nightlyPrice: 255, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Old Mill", nightlyPrice: 182, stars: 2, city: "Lisbon", breakfast: true},
  {id: 8, name: "Cityloft", nightlyPrice: 360, stars: 2, city: "Toronto", breakfast: true}
];

test("with 255, 360", () => {
  expect(hotelsInRange(HOTELS, 255, 360)).toEqual(["Sky Garden","Olive Court","Cityloft"]);
});

test("with 360, 367", () => {
  expect(hotelsInRange(HOTELS, 360, 367)).toEqual(["The Grand","Cityloft"]);
});

test("with 255, 255", () => {
  expect(hotelsInRange(HOTELS, 255, 255)).toEqual(["Olive Court"]);
});
