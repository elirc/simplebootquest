const CARS = [
  {id: 1, model: "Ioniq", priceK: 46, km: 9747, year: 2014, fuel: "hybrid"},
  {id: 2, model: "Polo", priceK: 58, km: 126374, year: 2022, fuel: "electric"},
  {id: 3, model: "Mustang", priceK: 28, km: 18419, year: 2024, fuel: "hybrid"},
  {id: 4, model: "Mazda3", priceK: 50, km: 154717, year: 2016, fuel: "diesel"},
  {id: 5, model: "Fiesta", priceK: 34, km: 93109, year: 2018, fuel: "electric"},
  {id: 6, model: "Clio", priceK: 39, km: 130314, year: 2019, fuel: "petrol"},
  {id: 7, model: "Corolla", priceK: 20, km: 74288, year: 2023, fuel: "petrol"},
  {id: 8, model: "Model 3", priceK: 22, km: 133570, year: 2022, fuel: "hybrid"}
];

test("an empty list", () => {
  expect(totalPriceK([])).toEqual(0);
});

test("all cars", () => {
  expect(totalPriceK(CARS)).toEqual(297);
});
