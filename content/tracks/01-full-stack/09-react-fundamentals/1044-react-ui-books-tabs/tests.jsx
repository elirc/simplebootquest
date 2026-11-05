const BOOKS = [
  {id: 1, title: "Ulysses", pages: 256, year: 1851, genre: "tech", available: false},
  {id: 2, title: "Matilda", pages: 527, year: 1906, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 665, year: 1846, genre: "tech", available: true},
  {id: 4, title: "Rebecca", pages: 181, year: 1980, genre: "tech", available: false},
  {id: 5, title: "Persuasion", pages: 348, year: 1975, genre: "classic", available: true},
  {id: 6, title: "Kindred", pages: 629, year: 1988, genre: "sci-fi", available: false}
];

test('one tab per genre', () => {
  const ui = mount(<BookTabs items={BOOKS} />);
  expect(ui.findAll('button').map(text)).toEqual(["tech","sci-fi","classic"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Ulysses","Clean Code","Rebecca"]);
});

test('switching tabs', () => {
  const ui = mount(<BookTabs items={BOOKS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["Persuasion"]);
});
