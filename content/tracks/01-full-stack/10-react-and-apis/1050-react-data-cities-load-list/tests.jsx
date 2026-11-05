const CITIES = [
  {id: 1, name: "Accra", population: 4629, avgTemp: 19, continent: "Europe"},
  {id: 2, name: "Perth", population: 5561, avgTemp: 21, continent: "Europe"},
  {id: 3, name: "Cairo", population: 2912, avgTemp: 17, continent: "Europe"},
  {id: 4, name: "Turin", population: 2274, avgTemp: 18, continent: "Americas"},
  {id: 5, name: "Quito", population: 5932, avgTemp: 13, continent: "Europe"}
];

test('loading then data', async () => {
  const load = vi.fn(async () => CITIES);
  const ui = mount(<CityList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Accra","Perth","Cairo","Turin","Quito"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return CITIES;
  });
  const ui = mount(<CityList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
