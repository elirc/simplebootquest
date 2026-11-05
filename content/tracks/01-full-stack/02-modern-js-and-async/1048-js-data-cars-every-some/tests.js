const CARS = [
  {id: 1, model: "Ioniq", priceK: 34, km: 42680, year: 2021, fuel: "electric"},
  {id: 2, model: "Fiesta", priceK: 42, km: 135000, year: 2020, fuel: "diesel"},
  {id: 3, model: "Leaf", priceK: 23, km: 24697, year: 2009, fuel: "electric"},
  {id: 4, model: "Corolla", priceK: 18, km: 103087, year: 2010, fuel: "hybrid"},
  {id: 5, model: "Civic", priceK: 43, km: 95195, year: 2021, fuel: "hybrid"},
  {id: 6, model: "Prius", priceK: 47, km: 179983, year: 2019, fuel: "hybrid"},
  {id: 7, model: "Golf", priceK: 31, km: 42236, year: 2010, fuel: "petrol"},
  {id: 8, model: "Polo", priceK: 44, km: 63944, year: 2017, fuel: "electric"}
];

test("with 42680", () => {
  expect(allCarsUnder(CARS, 42680)).toEqual(false);
});

test("with 179984", () => {
  expect(allCarsUnder(CARS, 179984)).toEqual(true);
});

test("with 179983", () => {
  expect(allCarsUnder(CARS, 179983)).toEqual(false);
});
