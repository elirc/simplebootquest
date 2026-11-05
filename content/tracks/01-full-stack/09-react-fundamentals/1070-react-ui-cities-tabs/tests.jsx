const CITIES = [
  {id: 1, name: "Cairo", population: 7438, avgTemp: 4, continent: "Africa"},
  {id: 2, name: "Oslo", population: 5533, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Turin", population: 2929, avgTemp: 11, continent: "Europe"},
  {id: 4, name: "Perth", population: 7071, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Accra", population: 3630, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Austin", population: 5097, avgTemp: 7, continent: "Europe"}
];

test('one tab per continent', () => {
  const ui = mount(<CityTabs items={CITIES} />);
  expect(ui.findAll('button').map(text)).toEqual(["Africa","Americas","Europe","Oceania"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Cairo"]);
});

test('switching tabs', () => {
  const ui = mount(<CityTabs items={CITIES} />);
  ui.click(ui.findAll('button')[3]);
  expect(ui.findAll('li').map(text)).toEqual(["Accra"]);
});
