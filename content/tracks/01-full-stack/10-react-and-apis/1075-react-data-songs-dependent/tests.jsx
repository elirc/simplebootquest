const SONGS = [
  {id: 1, title: "Halo", seconds: 317, plays: 365, artist: "The Pines", mood: "happy"},
  {id: 2, title: "Gravity", seconds: 155, plays: 7225, artist: "Nova", mood: "dark"},
  {id: 3, title: "Drift", seconds: 292, plays: 2482, artist: "Nova", mood: "dark"},
  {id: 4, title: "Lanterns", seconds: 225, plays: 678, artist: "Nova", mood: "happy"},
  {id: 5, title: "Static", seconds: 299, plays: 1079, artist: "Nova", mood: "calm"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? SONGS.slice(0, 1) : SONGS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<SongBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Gravity","Drift","Lanterns","Static"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
