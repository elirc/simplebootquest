const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 5, heightCm: 82, light: "low", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 79, light: "medium", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 6, heightCm: 111, light: "bright", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 3, heightCm: 33, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 66, light: "low", petSafe: true}
];

test('loading then data', async () => {
  const load = vi.fn(async () => PLANTS);
  const ui = mount(<PlantList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Snake Plant","Ivy","Cactus","Fern","Mint"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return PLANTS;
  });
  const ui = mount(<PlantList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
