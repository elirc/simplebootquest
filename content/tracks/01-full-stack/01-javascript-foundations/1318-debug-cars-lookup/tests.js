const CARS = [
  {id: 1, model: "Clio", priceK: 30, km: 179735, year: 2021, fuel: "diesel"},
  {id: 2, model: "Mustang", priceK: 25, km: 106379, year: 2019, fuel: "petrol"},
  {id: 3, model: "Corolla", priceK: 56, km: 96420, year: 2008, fuel: "hybrid"},
  {id: 4, model: "Fiesta", priceK: 39, km: 14095, year: 2013, fuel: "electric"},
  {id: 5, model: "Civic", priceK: 50, km: 55376, year: 2009, fuel: "diesel"},
  {id: 6, model: "Ioniq", priceK: 32, km: 155579, year: 2019, fuel: "diesel"},
  {id: 7, model: "Golf", priceK: 51, km: 28274, year: 2010, fuel: "diesel"},
  {id: 8, model: "Prius", priceK: 47, km: 9638, year: 2019, fuel: "diesel"}
];

test("with \"Golf\"", () => {
  expect(kmOf(CARS, "Golf")).toEqual(28274);
});

test("with \"Nope\"", () => {
  expect(kmOf(CARS, "Nope")).toEqual(null);
});
