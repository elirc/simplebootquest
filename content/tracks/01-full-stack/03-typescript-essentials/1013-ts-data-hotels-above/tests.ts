const HOTELS = [
  {id: 1, name: "Olive Court", nightlyPrice: 389, stars: 4, city: "Toronto", breakfast: true},
  {id: 2, name: "Sea Breeze", nightlyPrice: 282, stars: 2, city: "Lisbon", breakfast: false},
  {id: 3, name: "Riverside Inn", nightlyPrice: 140, stars: 3, city: "Kyoto", breakfast: false},
  {id: 4, name: "Cityloft", nightlyPrice: 184, stars: 4, city: "Kyoto", breakfast: true},
  {id: 5, name: "Pine Lodge", nightlyPrice: 70, stars: 4, city: "Lisbon", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 315, stars: 3, city: "Toronto", breakfast: true},
  {id: 7, name: "Station Hotel", nightlyPrice: 288, stars: 4, city: "Kyoto", breakfast: false},
  {id: 8, name: "Harbour View", nightlyPrice: 390, stars: 2, city: "Kyoto", breakfast: false}
];

test("with 3", () => {
  expect(hotelsAbove(HOTELS, 3)).toEqual(["Olive Court","Cityloft","Pine Lodge","Station Hotel"]);
});

test("with 4", () => {
  expect(hotelsAbove(HOTELS, 4)).toEqual([]);
});

test("with 999999", () => {
  expect(hotelsAbove(HOTELS, 999999)).toEqual([]);
});
