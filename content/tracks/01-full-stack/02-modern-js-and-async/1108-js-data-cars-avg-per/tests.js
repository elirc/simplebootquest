const CARS = [
  {id: 1, model: "Model 3", priceK: 29, km: 9364, year: 2021, fuel: "hybrid"},
  {id: 2, model: "Leaf", priceK: 38, km: 178442, year: 2022, fuel: "hybrid"},
  {id: 3, model: "Mazda3", priceK: 14, km: 176689, year: 2023, fuel: "diesel"},
  {id: 4, model: "Ioniq", priceK: 28, km: 170749, year: 2018, fuel: "diesel"},
  {id: 5, model: "Corolla", priceK: 54, km: 152732, year: 2018, fuel: "petrol"},
  {id: 6, model: "Civic", priceK: 29, km: 66767, year: 2021, fuel: "electric"},
  {id: 7, model: "Clio", priceK: 48, km: 114151, year: 2020, fuel: "diesel"},
  {id: 8, model: "Prius", priceK: 28, km: 102278, year: 2020, fuel: "petrol"}
];

test("an empty list", () => {
  expect(averagePriceKPerFuel([])).toEqual({});
});

test("all cars", () => {
  expect(averagePriceKPerFuel(CARS)).toEqual({"hybrid":34,"diesel":30,"petrol":41,"electric":29});
});
