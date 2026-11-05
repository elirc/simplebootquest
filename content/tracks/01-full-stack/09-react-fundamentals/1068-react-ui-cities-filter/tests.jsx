const CITIES = [
  {id: 1, name: "Cairo", population: 7438, avgTemp: 4, continent: "Africa"},
  {id: 2, name: "Oslo", population: 5533, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Turin", population: 2929, avgTemp: 11, continent: "Europe"},
  {id: 4, name: "Perth", population: 7071, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Accra", population: 3630, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Austin", population: 5097, avgTemp: 7, continent: "Europe"}
];

test('shows everything at first', () => {
  const ui = mount(<CityFilter items={CITIES} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<CityFilter items={CITIES} />);
  ui.type('input', "OS");
  expect(ui.findAll('li').map(text)).toEqual(["Oslo"]);
});

test('empty state', () => {
  const ui = mount(<CityFilter items={CITIES} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
