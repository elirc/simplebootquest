const CARS = [
  {id: 1, model: "Mazda3", priceK: 32, km: 74969, year: 2023, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 19, km: 57823, year: 2023, fuel: "electric"},
  {id: 3, model: "Clio", priceK: 29, km: 90535, year: 2017, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 32, km: 81779, year: 2021, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 23, km: 144422, year: 2014, fuel: "electric"}
];

test('loading then data', async () => {
  const load = vi.fn(async () => CARS);
  const ui = mount(<CarList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Mazda3","Golf","Clio","Polo","Leaf"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return CARS;
  });
  const ui = mount(<CarList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
