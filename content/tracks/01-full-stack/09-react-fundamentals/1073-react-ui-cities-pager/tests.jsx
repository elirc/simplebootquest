const CITIES = [
  {id: 1, name: "Cairo", population: 7438, avgTemp: 4, continent: "Africa"},
  {id: 2, name: "Oslo", population: 5533, avgTemp: 18, continent: "Americas"},
  {id: 3, name: "Turin", population: 2929, avgTemp: 11, continent: "Europe"},
  {id: 4, name: "Perth", population: 7071, avgTemp: 8, continent: "Americas"},
  {id: 5, name: "Accra", population: 3630, avgTemp: 19, continent: "Oceania"},
  {id: 6, name: "Austin", population: 5097, avgTemp: 7, continent: "Europe"}
];

test('first page', () => {
  const ui = mount(<CityPager items={CITIES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Cairo","Oslo"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<CityPager items={CITIES} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Accra","Austin"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
