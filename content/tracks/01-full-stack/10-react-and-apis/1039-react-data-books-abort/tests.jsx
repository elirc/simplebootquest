const BOOKS = [
  {id: 1, title: "Neuromancer", pages: 291, year: 1968, genre: "sci-fi", available: false},
  {id: 2, title: "Matilda", pages: 288, year: 1934, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 557, year: 1993, genre: "tech", available: false},
  {id: 4, title: "Walden", pages: 511, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Clean Code", pages: 473, year: 1984, genre: "fiction", available: true}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(BOOKS.filter((x) => x.title.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveBookSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ne");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Neuromancer"]));
  expect(signals[1].aborted).toBe(true);
});
