const CARS = [
  {id: 1, model: "Fiesta", priceK: 36, km: 62309, year: 2013, fuel: "petrol"},
  {id: 2, model: "Clio", priceK: 56, km: 60337, year: 2024, fuel: "petrol"},
  {id: 3, model: "Ioniq", priceK: 36, km: 79757, year: 2015, fuel: "petrol"},
  {id: 4, model: "Mustang", priceK: 57, km: 33670, year: 2012, fuel: "petrol"},
  {id: 5, model: "Polo", priceK: 48, km: 175590, year: 2017, fuel: "petrol"},
  {id: 6, model: "Civic", priceK: 47, km: 100929, year: 2022, fuel: "electric"},
  {id: 7, model: "Mazda3", priceK: 38, km: 173035, year: 2013, fuel: "petrol"},
  {id: 8, model: "Corolla", priceK: 33, km: 101173, year: 2024, fuel: "diesel"}
];

test("an empty list", () => {
  expect(lowestKm([])).toEqual(null);
});

test("all cars", () => {
  expect(lowestKm(CARS)).toEqual("Mustang");
});
