const CITIES = [
  {id: 1, name: "Cairo", population: 7438, avgTemp: 4, continent: "Africa"},
  {id: 2, name: "Oslo", population: 5533, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Turin", population: 2929, avgTemp: 11, continent: "Europe"},
  {id: 4, name: "Perth", population: 7071, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Accra", population: 3630, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Austin", population: 5097, avgTemp: 7, continent: "Europe"}
];

test('ascending first', () => {
  const ui = mount(<CitySorter items={CITIES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Cairo","Austin","Perth","Turin","Oslo","Accra"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<CitySorter items={CITIES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Accra","Oslo","Turin","Perth","Austin","Cairo"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(CITIES);
  const ui = mount(<CitySorter items={CITIES} />);
  ui.click('button');
  expect(JSON.stringify(CITIES)).toBe(before);
});
