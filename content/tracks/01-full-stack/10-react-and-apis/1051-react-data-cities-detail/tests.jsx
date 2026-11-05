const CITIES = [
  {id: 1, name: "Accra", population: 4629, avgTemp: 19, continent: "Europe"},
  {id: 2, name: "Perth", population: 5561, avgTemp: 21, continent: "Europe"},
  {id: 3, name: "Cairo", population: 2912, avgTemp: 17, continent: "Europe"},
  {id: 4, name: "Turin", population: 2274, avgTemp: 18, continent: "Americas"},
  {id: 5, name: "Quito", population: 5932, avgTemp: 13, continent: "Europe"}
];
const byId = (id) => CITIES.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<CityDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Perth"));
  expect(ui.text()).toContain("average temperature: 21");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<CityDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<CityDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Cairo"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<CityDetail id={1} load={load} />);
  ui.rerender(<CityDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Turin"));
});
