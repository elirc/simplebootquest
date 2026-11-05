const CARS = [
  {id: 1, model: "Prius", priceK: 50, km: 45926, year: 2014, fuel: "hybrid"},
  {id: 2, model: "Golf", priceK: 43, km: 27274, year: 2008, fuel: "diesel"},
  {id: 3, model: "Corolla", priceK: 45, km: 28692, year: 2010, fuel: "hybrid"},
  {id: 4, model: "Polo", priceK: 35, km: 77134, year: 2013, fuel: "diesel"},
  {id: 5, model: "Mustang", priceK: 43, km: 46065, year: 2011, fuel: "petrol"},
  {id: 6, model: "Fiesta", priceK: 20, km: 116269, year: 2024, fuel: "petrol"},
  {id: 7, model: "Leaf", priceK: 54, km: 108806, year: 2015, fuel: "hybrid"},
  {id: 8, model: "Clio", priceK: 52, km: 41663, year: 2018, fuel: "electric"}
];

test("an empty list", () => {
  expect(averagePriceKPerFuel([])).toEqual({});
});

test("all cars", () => {
  expect(averagePriceKPerFuel(CARS)).toEqual({"hybrid":50,"diesel":39,"petrol":32,"electric":52});
});
