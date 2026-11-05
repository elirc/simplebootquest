const CARS = [
  {id: 1, model: "Mazda3", priceK: 32, km: 74969, year: 2023, fuel: "electric"},
  {id: 2, model: "Golf", priceK: 19, km: 57823, year: 2023, fuel: "electric"},
  {id: 3, model: "Clio", priceK: 29, km: 90535, year: 2017, fuel: "diesel"},
  {id: 4, model: "Polo", priceK: 32, km: 81779, year: 2021, fuel: "petrol"},
  {id: 5, model: "Leaf", priceK: 23, km: 144422, year: 2014, fuel: "electric"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(CARS.filter((x) => x.model.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveCarSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ma");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Mazda3"]));
  expect(signals[1].aborted).toBe(true);
});
