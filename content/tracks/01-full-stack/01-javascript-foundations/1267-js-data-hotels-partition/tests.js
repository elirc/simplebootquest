const HOTELS = [
  {id: 1, name: "Station Hotel", nightlyPrice: 338, stars: 2, city: "Kyoto", breakfast: false},
  {id: 2, name: "The Grand", nightlyPrice: 184, stars: 5, city: "Toronto", breakfast: true},
  {id: 3, name: "Maple House", nightlyPrice: 362, stars: 3, city: "Lisbon", breakfast: false},
  {id: 4, name: "Olive Court", nightlyPrice: 239, stars: 2, city: "Kyoto", breakfast: false},
  {id: 5, name: "Cityloft", nightlyPrice: 307, stars: 4, city: "Lisbon", breakfast: false},
  {id: 6, name: "Harbour View", nightlyPrice: 60, stars: 4, city: "Kyoto", breakfast: false},
  {id: 7, name: "Sky Garden", nightlyPrice: 270, stars: 1, city: "Lisbon", breakfast: true},
  {id: 8, name: "Old Mill", nightlyPrice: 263, stars: 4, city: "Kyoto", breakfast: false}
];

test("an empty list", () => {
  expect(splitHotelsByBreakfast([])).toEqual({"yes":[],"no":[]});
});

test("all hotels", () => {
  expect(splitHotelsByBreakfast(HOTELS)).toEqual({"yes":["The Grand","Sky Garden"],"no":["Station Hotel","Maple House","Olive Court","Cityloft","Harbour View","Old Mill"]});
});
