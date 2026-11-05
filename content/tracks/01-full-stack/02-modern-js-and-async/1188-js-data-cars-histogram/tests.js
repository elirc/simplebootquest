const CARS = [
  {id: 1, model: "Model 3", priceK: 17, km: 33651, year: 2020, fuel: "diesel"},
  {id: 2, model: "Ioniq", priceK: 42, km: 150197, year: 2014, fuel: "electric"},
  {id: 3, model: "Corolla", priceK: 53, km: 156597, year: 2018, fuel: "hybrid"},
  {id: 4, model: "Mazda3", priceK: 15, km: 77295, year: 2011, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 51, km: 126628, year: 2010, fuel: "electric"},
  {id: 6, model: "Prius", priceK: 53, km: 6519, year: 2021, fuel: "electric"},
  {id: 7, model: "Fiesta", priceK: 54, km: 128833, year: 2009, fuel: "diesel"},
  {id: 8, model: "Civic", priceK: 50, km: 135022, year: 2011, fuel: "hybrid"}
];

test("with 10", () => {
  expect(priceKHistogram(CARS, 10)).toEqual({"10":2,"40":1,"50":5});
});

test("with 20", () => {
  expect(priceKHistogram(CARS, 20)).toEqual({"0":2,"40":6});
});
