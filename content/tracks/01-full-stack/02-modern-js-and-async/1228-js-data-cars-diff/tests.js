const BEFORE = [
  {id: 1, model: "Mustang", priceK: 52, km: 153876, year: 2010, fuel: "petrol"},
  {id: 2, model: "Civic", priceK: 23, km: 43921, year: 2017, fuel: "hybrid"},
  {id: 3, model: "Fiesta", priceK: 20, km: 162881, year: 2010, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 25, km: 15806, year: 2019, fuel: "diesel"},
  {id: 5, model: "Model 3", priceK: 36, km: 44133, year: 2013, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 28, km: 144183, year: 2018, fuel: "electric"},
  {id: 7, model: "Polo", priceK: 25, km: 118535, year: 2008, fuel: "diesel"},
  {id: 8, model: "Corolla", priceK: 45, km: 93891, year: 2009, fuel: "electric"}
];
const AFTER = [
  {id: 1, model: "Mustang", priceK: 52, km: 153876, year: 2010, fuel: "petrol"},
  {id: 2, model: "Civic", priceK: 30, km: 43921, year: 2017, fuel: "hybrid"},
  {id: 3, model: "Fiesta", priceK: 20, km: 162881, year: 2010, fuel: "electric"},
  {id: 4, model: "Ioniq", priceK: 25, km: 15806, year: 2019, fuel: "diesel"},
  {id: 5, model: "Model 3", priceK: 43, km: 44133, year: 2013, fuel: "petrol"},
  {id: 6, model: "Golf", priceK: 28, km: 144183, year: 2018, fuel: "electric"},
  {id: 7, model: "Polo", priceK: 25, km: 118535, year: 2008, fuel: "diesel"},
  {id: 8, model: "Corolla", priceK: 52, km: 93891, year: 2009, fuel: "electric"}
];

test("finds changed ids", () => {
  expect(priceKChanges(BEFORE, AFTER)).toEqual([2,5,8]);
});

test("no changes", () => {
  expect(priceKChanges(BEFORE, BEFORE)).toEqual([]);
});
