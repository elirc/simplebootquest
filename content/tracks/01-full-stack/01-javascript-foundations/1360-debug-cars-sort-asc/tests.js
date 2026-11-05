const CARS = [
  {id: 1, model: "Leaf", priceK: 41, km: 79065, year: 2018, fuel: "hybrid"},
  {id: 2, model: "Mazda3", priceK: 55, km: 54463, year: 2018, fuel: "hybrid"},
  {id: 3, model: "Fiesta", priceK: 30, km: 171300, year: 2014, fuel: "diesel"},
  {id: 4, model: "Mustang", priceK: 29, km: 46764, year: 2023, fuel: "petrol"},
  {id: 5, model: "Prius", priceK: 39, km: 123080, year: 2016, fuel: "hybrid"},
  {id: 6, model: "Ioniq", priceK: 39, km: 8167, year: 2022, fuel: "electric"},
  {id: 7, model: "Model 3", priceK: 35, km: 3923, year: 2022, fuel: "diesel"},
  {id: 8, model: "Corolla", priceK: 42, km: 32286, year: 2014, fuel: "electric"}
];

test('does not mutate the input', () => {
  const before = JSON.stringify(CARS);
  carsByKm(CARS);
  expect(JSON.stringify(CARS)).toBe(before);
});

test("all cars", () => {
  expect(carsByKm(CARS)).toEqual(["Model 3","Ioniq","Corolla","Mustang","Mazda3","Leaf","Prius","Fiesta"]);
});
