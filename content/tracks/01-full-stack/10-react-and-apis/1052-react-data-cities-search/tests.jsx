const CITIES = [
  {id: 1, name: "Accra", population: 4629, avgTemp: 19, continent: "Europe"},
  {id: 2, name: "Perth", population: 5561, avgTemp: 21, continent: "Europe"},
  {id: 3, name: "Cairo", population: 2912, avgTemp: 17, continent: "Europe"},
  {id: 4, name: "Turin", population: 2274, avgTemp: 18, continent: "Americas"},
  {id: 5, name: "Quito", population: 5932, avgTemp: 13, continent: "Europe"}
];
const search = vi.fn(async (q) => CITIES.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<CitySearch search={search} />);
  ui.type('input', '  ac ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Accra"]);
  expect(search).toHaveBeenCalledWith('ac');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<CitySearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<CitySearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
