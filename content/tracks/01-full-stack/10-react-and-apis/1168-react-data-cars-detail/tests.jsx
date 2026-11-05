const CARS = [
  {id: 1, model: "Mazda3", priceK: 32, km: 74969, year: 2023, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 19, km: 57823, year: 2023, fuel: "electric"},
  {id: 3, model: "Clio", priceK: 29, km: 90535, year: 2017, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 32, km: 81779, year: 2021, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 23, km: 144422, year: 2014, fuel: "electric"}
];
const byId = (id) => CARS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<CarDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Golf"));
  expect(ui.text()).toContain("price (thousands): 19");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<CarDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<CarDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Clio"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<CarDetail id={1} load={load} />);
  ui.rerender(<CarDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Polo"));
});
