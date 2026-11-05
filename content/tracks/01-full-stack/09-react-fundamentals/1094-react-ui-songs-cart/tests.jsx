const SONGS = [
  {id: 1, title: "Drift", seconds: 165, plays: 594, artist: "Nova", mood: "happy"},
  {id: 2, title: "Velvet", seconds: 302, plays: 4439, artist: "Nova", mood: "happy"},
  {id: 3, title: "Echoes", seconds: 241, plays: 117, artist: "Kairo", mood: "happy"},
  {id: 4, title: "Halo", seconds: 239, plays: 4211, artist: "Nova", mood: "calm"},
  {id: 5, title: "Riverside", seconds: 312, plays: 1462, artist: "Nova", mood: "happy"},
  {id: 6, title: "Gravity", seconds: 123, plays: 7809, artist: "Nova", mood: "happy"}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={SONGS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={SONGS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 5627');
});

test('never below zero', () => {
  const ui = mount(<Cart items={SONGS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
