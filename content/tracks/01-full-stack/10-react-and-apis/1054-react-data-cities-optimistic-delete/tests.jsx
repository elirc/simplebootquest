const CITIES = [
  {id: 1, name: "Accra", population: 4629, avgTemp: 19, continent: "Europe"},
  {id: 2, name: "Perth", population: 5561, avgTemp: 21, continent: "Europe"},
  {id: 3, name: "Cairo", population: 2912, avgTemp: 17, continent: "Europe"},
  {id: 4, name: "Turin", population: 2274, avgTemp: 18, continent: "Americas"},
  {id: 5, name: "Quito", population: 5932, avgTemp: 13, continent: "Europe"}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<CityManager initial={CITIES} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Accra","Cairo","Turin","Quito"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<CityManager initial={CITIES} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Accra","Perth","Cairo","Turin","Quito"]);
});
