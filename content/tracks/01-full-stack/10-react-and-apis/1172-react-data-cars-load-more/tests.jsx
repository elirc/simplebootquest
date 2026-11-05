const CARS = [
  {id: 1, model: "Mazda3", priceK: 32, km: 74969, year: 2023, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 19, km: 57823, year: 2023, fuel: "electric"},
  {id: 3, model: "Clio", priceK: 29, km: 90535, year: 2017, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 32, km: 81779, year: 2021, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 23, km: 144422, year: 2014, fuel: "electric"}
];
const loadPage = vi.fn(async (page) => ({ items: CARS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < CARS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<CarFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Mazda3","Golf","Clio","Polo","Leaf"]));
  expect(ui.find('button')).toBeUndefined();
});
