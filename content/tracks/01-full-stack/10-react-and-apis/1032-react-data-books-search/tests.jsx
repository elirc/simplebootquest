const BOOKS = [
  {id: 1, title: "Neuromancer", pages: 291, year: 1968, genre: "sci-fi", available: false},
  {id: 2, title: "Matilda", pages: 288, year: 1934, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 557, year: 1993, genre: "tech", available: false},
  {id: 4, title: "Walden", pages: 511, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Clean Code", pages: 473, year: 1984, genre: "fiction", available: true}
];
const search = vi.fn(async (q) => BOOKS.filter((x) => x.title.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<BookSearch search={search} />);
  ui.type('input', '  ne ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Neuromancer"]);
  expect(search).toHaveBeenCalledWith('ne');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<BookSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<BookSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
