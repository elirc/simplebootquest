const CITIES = [
  {id: 1, name: "Accra", population: 4629, avgTemp: 19, continent: "Europe"},
  {id: 2, name: "Perth", population: 5561, avgTemp: 21, continent: "Europe"},
  {id: 3, name: "Cairo", population: 2912, avgTemp: 17, continent: "Europe"},
  {id: 4, name: "Turin", population: 2274, avgTemp: 18, continent: "Americas"},
  {id: 5, name: "Quito", population: 5932, avgTemp: 13, continent: "Europe"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(CITIES.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveCitySearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ac");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Accra"]));
  expect(signals[1].aborted).toBe(true);
});
