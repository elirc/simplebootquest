const SONGS = [
  {id: 1, title: "Drift", seconds: 165, plays: 594, artist: "Nova", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 302, plays: 4439, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 241, plays: 117, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Halo", seconds: 239, plays: 4211, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 312, plays: 1462, artist: "Nova", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 123, plays: 7809, artist: "Nova", mood: "happy"}
];

test('shows everything at first', () => {
  const ui = mount(<SongFilter items={SONGS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<SongFilter items={SONGS} />);
  ui.type('input', "VE");
  expect(ui.findAll('li').map(text)).toEqual(["Velvet","Riverside"]);
});

test('empty state', () => {
  const ui = mount(<SongFilter items={SONGS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
