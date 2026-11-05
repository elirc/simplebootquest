const EVENTS = [
  {id: 1, name: "Hackathon", capacity: 99, registered: 376, format: "hybrid", free: false},
  {id: 2, name: "Book Club", capacity: 112, registered: 376, format: "hybrid", free: true},
  {id: 3, name: "Demo Day", capacity: 122, registered: 251, format: "online", free: false},
  {id: 4, name: "Startup Night", capacity: 247, registered: 221, format: "online", free: true},
  {id: 5, name: "Workshop", capacity: 357, registered: 8, format: "in-person", free: true}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(EVENTS.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveEventSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ha");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Hackathon"]));
  expect(signals[1].aborted).toBe(true);
});
