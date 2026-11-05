const CARS = [
  {id: 1, model: "Civic", priceK: 31, km: 152702, year: 2019, fuel: "petrol"},
  {id: 2, model: "Ioniq", priceK: 16, km: 1145, year: 2014, fuel: "diesel"},
  {id: 3, model: "Mustang", priceK: 51, km: 172940, year: 2013, fuel: "diesel"},
  {id: 4, model: "Model 3", priceK: 50, km: 115233, year: 2020, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 43, km: 145089, year: 2011, fuel: "hybrid"},
  {id: 6, model: "Fiesta", priceK: 46, km: 101398, year: 2021, fuel: "diesel"},
  {id: 7, model: "Prius", priceK: 40, km: 102252, year: 2012, fuel: "hybrid"},
  {id: 8, model: "Leaf", priceK: 56, km: 92927, year: 2008, fuel: "diesel"}
];

test("with \"petrol\"", () => {
  expect(countCarsByFuel(CARS, "petrol")).toEqual(2);
});

test("with \"diesel\"", () => {
  expect(countCarsByFuel(CARS, "diesel")).toEqual(4);
});

test("with \"electric\"", () => {
  expect(countCarsByFuel(CARS, "electric")).toEqual(0);
});

test("with \"nope\"", () => {
  expect(countCarsByFuel(CARS, "nope")).toEqual(0);
});
