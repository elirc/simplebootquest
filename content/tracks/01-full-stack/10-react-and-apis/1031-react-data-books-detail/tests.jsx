const BOOKS = [
  {id: 1, title: "Neuromancer", pages: 291, year: 1968, genre: "sci-fi", available: false},
  {id: 2, title: "Matilda", pages: 288, year: 1934, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 557, year: 1993, genre: "tech", available: false},
  {id: 4, title: "Walden", pages: 511, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Clean Code", pages: 473, year: 1984, genre: "fiction", available: true}
];
const byId = (id) => BOOKS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<BookDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Matilda"));
  expect(ui.text()).toContain("page count: 288");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<BookDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<BookDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Siddhartha"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<BookDetail id={1} load={load} />);
  ui.rerender(<BookDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Walden"));
});
