const CITIES = [
  {id: 1, name: "Cairo", population: 7438, avgTemp: 4, continent: "Africa"},
  {id: 2, name: "Oslo", population: 5533, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Turin", population: 2929, avgTemp: 11, continent: "Europe"},
  {id: 4, name: "Perth", population: 7071, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Accra", population: 3630, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Austin", population: 5097, avgTemp: 7, continent: "Europe"}
];

test('starts hidden', () => {
  const ui = mount(<CityToggle items={CITIES} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show cities');
});

test('shows and hides', () => {
  const ui = mount(<CityToggle items={CITIES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Cairo","Oslo","Turin","Perth","Accra","Austin"]);
  expect(text(ui.find('button'))).toBe('Hide cities');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
