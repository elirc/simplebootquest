const CARS = [
  {id: 1, model: "Mazda3", priceK: 32, km: 74969, year: 2023, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 19, km: 57823, year: 2023, fuel: "electric"},
  {id: 3, model: "Clio", priceK: 29, km: 90535, year: 2017, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 32, km: 81779, year: 2021, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 23, km: 144422, year: 2014, fuel: "electric"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? CARS.slice(0, 1) : CARS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<CarBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Golf","Clio","Polo","Leaf"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
