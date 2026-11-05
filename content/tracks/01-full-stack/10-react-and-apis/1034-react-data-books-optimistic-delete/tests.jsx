const BOOKS = [
  {id: 1, title: "Neuromancer", pages: 291, year: 1968, genre: "sci-fi", available: false},
  {id: 2, title: "Matilda", pages: 288, year: 1934, genre: "tech", available: false},
  {id: 3, title: "Siddhartha", pages: 557, year: 1993, genre: "tech", available: false},
  {id: 4, title: "Walden", pages: 511, year: 1842, genre: "tech", available: false},
  {id: 5, title: "Clean Code", pages: 473, year: 1984, genre: "fiction", available: true}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<BookManager initial={BOOKS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Neuromancer","Siddhartha","Walden","Clean Code"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<BookManager initial={BOOKS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Neuromancer","Matilda","Siddhartha","Walden","Clean Code"]);
});
