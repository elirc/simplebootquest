const BOOKS = [
  {id: 1, title: "Neuromancer", pages: 291, year: 1968, genre: "sci-fi", available: false},
  {id: 2, title: "Matilda", pages: 288, year: 1934, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 557, year: 1993, genre: "tech", available: false},
  {id: 4, title: "Walden", pages: 511, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Clean Code", pages: 473, year: 1984, genre: "fiction", available: true}
];

test('loading then data', async () => {
  const load = vi.fn(async () => BOOKS);
  const ui = mount(<BookList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Neuromancer","Matilda","Siddhartha","Walden","Clean Code"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return BOOKS;
  });
  const ui = mount(<BookList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
