const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 99, registered: 376, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 112, registered: 376, format: "hybrid", free: true},
  {id: 3, name: "Demo Day", capacity: 122, registered: 251, format: "online", free: false},
  {id: 4, name: "Startup Night", capacity: 247, registered: 221, format: "online", free: true},
  {id: 5, name: "Workshop", capacity: 357, registered: 8, format: "in-person", free: true}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<EventManager initial={EVENTS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Hackathon","Demo Day","Startup Night","Workshop"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<EventManager initial={EVENTS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Hackathon","Book Club","Demo Day","Startup Night","Workshop"]);
});
