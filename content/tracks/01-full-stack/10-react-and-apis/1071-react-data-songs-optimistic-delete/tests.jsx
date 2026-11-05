const SONGS = [
  {id: 1, title: "Halo", seconds: 317, plays: 365, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 155, plays: 7225, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 292, plays: 2482, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 225, plays: 678, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 299, plays: 1079, artist: "Nova", mood: "calm"}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<SongManager initial={SONGS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Halo","Drift","Lanterns","Static"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<SongManager initial={SONGS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Halo","Gravity","Drift","Lanterns","Static"]);
});
