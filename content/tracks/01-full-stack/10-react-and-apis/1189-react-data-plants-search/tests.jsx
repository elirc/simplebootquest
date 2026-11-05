const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 5, heightCm: 82, light: "low", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 79, light: "medium", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 6, heightCm: 111, light: "bright", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 3, heightCm: 33, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 66, light: "low", petSafe: true}
];
const search = vi.fn(async (q) => PLANTS.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<PlantSearch search={search} />);
  ui.type('input', '  sn ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Snake Plant"]);
  expect(search).toHaveBeenCalledWith('sn');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<PlantSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<PlantSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
