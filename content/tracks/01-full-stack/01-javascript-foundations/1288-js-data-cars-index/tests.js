const CARS = [
  {id: 1, model: "Model 3", priceK: 57, km: 64456, year: 2019, fuel: "electric"},
  {id: 2, model: "Mustang", priceK: 21, km: 136017, year: 2021, fuel: "diesel"},
  {id: 3, model: "Clio", priceK: 37, km: 173236, year: 2009, fuel: "electric"},
  {id: 4, model: "Corolla", priceK: 37, km: 40859, year: 2013, fuel: "hybrid"},
  {id: 5, model: "Prius", priceK: 50, km: 43139, year: 2023, fuel: "diesel"},
  {id: 6, model: "Civic", priceK: 17, km: 10942, year: 2013, fuel: "hybrid"},
  {id: 7, model: "Polo", priceK: 40, km: 105734, year: 2012, fuel: "electric"},
  {id: 8, model: "Golf", priceK: 25, km: 60781, year: 2021, fuel: "hybrid"}
];

test("an empty list", () => {
  expect(carsById([])).toEqual({});
});

test("all cars", () => {
  expect(carsById(CARS)).toEqual({"1":"Model 3","2":"Mustang","3":"Clio","4":"Corolla","5":"Prius","6":"Civic","7":"Polo","8":"Golf"});
});
