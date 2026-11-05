const HOTELS = [
  {id: 1, name: "Sky Garden", nightlyPrice: 195, stars: 4, city: "Toronto", breakfast: false},
  {id: 2, name: "Pine Lodge", nightlyPrice: 174, stars: 4, city: "Kyoto", breakfast: false},
  {id: 3, name: "Harbour View", nightlyPrice: 189, stars: 1, city: "Toronto", breakfast: false},
  {id: 4, name: "Station Hotel", nightlyPrice: 223, stars: 4, city: "Kyoto", breakfast: false},
  {id: 5, name: "Sea Breeze", nightlyPrice: 175, stars: 2, city: "Toronto", breakfast: false},
  {id: 6, name: "Old Mill", nightlyPrice: 83, stars: 1, city: "Toronto", breakfast: false},
  {id: 7, name: "Northern Star", nightlyPrice: 265, stars: 3, city: "Kyoto", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 192, stars: 4, city: "Kyoto", breakfast: true}
];

test("with 2", () => {
  expect(hotelsAbove(HOTELS, 2)).toEqual(["Sky Garden","Pine Lodge","Station Hotel","Northern Star","Olive Court"]);
});

test("with 4", () => {
  expect(hotelsAbove(HOTELS, 4)).toEqual([]);
});

test("with 999999", () => {
  expect(hotelsAbove(HOTELS, 999999)).toEqual([]);
});
