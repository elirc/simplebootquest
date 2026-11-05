const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 99, registered: 376, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 112, registered: 376, format: "hybrid", free: true},
  {id: 3, name: "Demo Day", capacity: 122, registered: 251, format: "online", free: false},
  {id: 4, name: "Startup Night", capacity: 247, registered: 221, format: "online", free: true},
  {id: 5, name: "Workshop", capacity: 357, registered: 8, format: "in-person", free: true}
];
const search = vi.fn(async (q) => EVENTS.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<EventSearch search={search} />);
  ui.type('input', '  ha ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Hackathon"]);
  expect(search).toHaveBeenCalledWith('ha');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<EventSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<EventSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
