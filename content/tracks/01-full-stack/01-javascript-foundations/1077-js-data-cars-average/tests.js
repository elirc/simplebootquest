const CARS = [
  {id: 1, model: "Corolla", priceK: 28, km: 167990, year: 2010, fuel: "electric"},
  {id: 2, model: "Ioniq", priceK: 58, km: 156483, year: 2021, fuel: "electric"},
  {id: 3, model: "Leaf", priceK: 49, km: 5702, year: 2013, fuel: "petrol"},
  {id: 4, model: "Mustang", priceK: 43, km: 141302, year: 2020, fuel: "petrol"},
  {id: 5, model: "Golf", priceK: 26, km: 34422, year: 2018, fuel: "petrol"},
  {id: 6, model: "Civic", priceK: 46, km: 61422, year: 2014, fuel: "electric"},
  {id: 7, model: "Model 3", priceK: 18, km: 44557, year: 2022, fuel: "hybrid"},
  {id: 8, model: "Fiesta", priceK: 22, km: 32140, year: 2012, fuel: "hybrid"}
];

test("an empty list", () => {
  expect(averageYear([])).toEqual(null);
});

test("all cars", () => {
  expect(averageYear(CARS)).toEqual(2016.3);
});
