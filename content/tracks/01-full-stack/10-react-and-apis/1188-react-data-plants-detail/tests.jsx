const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 5, heightCm: 82, light: "low", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 79, light: "medium", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 6, heightCm: 111, light: "bright", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 3, heightCm: 33, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 66, light: "low", petSafe: true}
];
const byId = (id) => PLANTS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<PlantDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Ivy"));
  expect(ui.text()).toContain("height (cm): 79");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<PlantDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<PlantDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Cactus"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<PlantDetail id={1} load={load} />);
  ui.rerender(<PlantDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Fern"));
});
