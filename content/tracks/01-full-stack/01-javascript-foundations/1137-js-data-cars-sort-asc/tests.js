const CARS = [
  {id: 1, model: "Golf", priceK: 20, km: 37181, year: 2018, fuel: "diesel"},
  {id: 2, model: "Leaf", priceK: 29, km: 103088, year: 2011, fuel: "petrol"},
  {id: 3, model: "Ioniq", priceK: 19, km: 22123, year: 2023, fuel: "petrol"},
  {id: 4, model: "Corolla", priceK: 43, km: 141407, year: 2013, fuel: "diesel"},
  {id: 5, model: "Mazda3", priceK: 50, km: 37131, year: 2012, fuel: "petrol"},
  {id: 6, model: "Mustang", priceK: 33, km: 132774, year: 2013, fuel: "diesel"},
  {id: 7, model: "Polo", priceK: 32, km: 52984, year: 2013, fuel: "hybrid"},
  {id: 8, model: "Fiesta", priceK: 23, km: 97380, year: 2010, fuel: "hybrid"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  carsByPriceK(CARS);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("all cars", () => {
  expect(carsByPriceK(CARS)).toEqual(["Ioniq","Golf","Fiesta","Leaf","Polo","Mustang","Corolla","Mazda3"]);
});
