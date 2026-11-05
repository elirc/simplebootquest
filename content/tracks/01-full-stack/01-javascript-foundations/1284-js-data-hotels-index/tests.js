const HOTELS = [
  {id: 1, name: "Harbour View", nightlyPrice: 283, stars: 5, city: "Lisbon", breakfast: true},
  {id: 2, name: "Old Mill", nightlyPrice: 356, stars: 2, city: "Lisbon", breakfast: false},
  {id: 3, name: "Sky Garden", nightlyPrice: 404, stars: 5, city: "Toronto", breakfast: true},
  {id: 4, name: "Cityloft", nightlyPrice: 267, stars: 4, city: "Lisbon", breakfast: false},
  {id: 5, name: "Northern Star", nightlyPrice: 101, stars: 3, city: "Toronto", breakfast: false},
  {id: 6, name: "Pine Lodge", nightlyPrice: 274, stars: 4, city: "Toronto", breakfast: true},
  {id: 7, name: "Maple House", nightlyPrice: 79, stars: 4, city: "Toronto", breakfast: false},
  {id: 8, name: "Olive Court", nightlyPrice: 83, stars: 3, city: "Toronto", breakfast: false}
];

test("an empty list", () => {
  expect(hotelsById([])).toEqual({});
});

test("all hotels", () => {
  expect(hotelsById(HOTELS)).toEqual({"1":"Harbour View","2":"Old Mill","3":"Sky Garden","4":"Cityloft","5":"Northern Star","6":"Pine Lodge","7":"Maple House","8":"Olive Court"});
});
