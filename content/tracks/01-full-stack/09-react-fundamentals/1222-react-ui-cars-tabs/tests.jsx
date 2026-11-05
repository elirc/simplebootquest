const CARS = [
  {id: 1, model: "Fiesta", priceK: 57, km: 99361, year: 2010, fuel: "electric"},
  {id: 2, model: "Polo", priceK: 28, km: 117940, year: 2017, fuel: "diesel"},
  {id: 3, model: "Model 3", priceK: 26, km: 62546, year: 2012, fuel: "petrol"},
  {id: 4, model: "Civic", priceK: 51, km: 35998, year: 2018, fuel: "petrol"},
  {id: 5, model: "Clio", priceK: 32, km: 172195, year: 2017, fuel: "petrol"},
  {id: 6, model: "Leaf", priceK: 32, km: 91964, year: 2020, fuel: "diesel"}
];

test('one tab per fuel', () => {
  const ui = mount(<CarTabs items={CARS} />);
  expect(ui.findAll('button').map(text)).toEqual(["electric","diesel","petrol"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Fiesta"]);
});

test('switching tabs', () => {
  const ui = mount(<CarTabs items={CARS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["Model 3","Civic","Clio"]);
});
