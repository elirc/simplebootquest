const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 5, heightCm: 82, light: "low", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 79, light: "medium", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 6, heightCm: 111, light: "bright", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 3, heightCm: 33, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 66, light: "low", petSafe: true}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(PLANTS.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LivePlantSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "sn");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Snake Plant"]));
  expect(signals[1].aborted).toBe(true);
});
