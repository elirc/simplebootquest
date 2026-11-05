const CARS = [
  {id: 1, model: "Mustang", priceK: 24, km: 2028, year: 2014, fuel: "petrol"},
  {id: 2, model: "Polo", priceK: 44, km: 24277, year: 2022, fuel: "petrol"},
  {id: 3, model: "Corolla", priceK: 27, km: 89977, year: 2015, fuel: "hybrid"},
  {id: 4, model: "Clio", priceK: 48, km: 158206, year: 2022, fuel: "electric"},
  {id: 5, model: "Mazda3", priceK: 23, km: 160565, year: 2019, fuel: "diesel"},
  {id: 6, model: "Ioniq", priceK: 23, km: 55558, year: 2013, fuel: "petrol"},
  {id: 7, model: "Fiesta", priceK: 45, km: 65805, year: 2012, fuel: "petrol"},
  {id: 8, model: "Civic", priceK: 57, km: 162640, year: 2023, fuel: "diesel"}
];

test("with \"Polo\"", () => {
  expect(kmOf(CARS, "Polo")).toEqual(24277);
});

test("with \"Nope\"", () => {
  expect(kmOf(CARS, "Nope")).toEqual(null);
});
