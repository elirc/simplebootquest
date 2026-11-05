const PLANTS = [
  {id: 1, name: "Snake Plant", waterEveryDays: 5, heightCm: 82, light: "low", petSafe: true},
  {id: 2, name: "Ivy", waterEveryDays: 4, heightCm: 79, light: "medium", petSafe: false},
  {id: 3, name: "Cactus", waterEveryDays: 6, heightCm: 111, light: "bright", petSafe: true},
  {id: 4, name: "Fern", waterEveryDays: 3, heightCm: 33, light: "low", petSafe: false},
  {id: 5, name: "Mint", waterEveryDays: 4, heightCm: 66, light: "low", petSafe: true}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<PlantManager initial={PLANTS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Snake Plant","Cactus","Fern","Mint"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<PlantManager initial={PLANTS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Snake Plant","Ivy","Cactus","Fern","Mint"]);
});
