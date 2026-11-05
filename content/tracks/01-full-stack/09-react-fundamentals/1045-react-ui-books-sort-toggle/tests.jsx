const BOOKS = [
  {id: 1, title: "Ulysses", pages: 256, year: 1851, genre: "tech", available: false},
  {id: 2, title: "Matilda", pages: 527, year: 1906, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 665, year: 1846, genre: "tech", available: true},
  {id: 4, title: "Rebecca", pages: 181, year: 1980, genre: "tech", available: false},
  {id: 5, title: "Persuasion", pages: 348, year: 1975, genre: "classic", available: true},
  {id: 6, title: "Kindred", pages: 629, year: 1988, genre: "sci-fi", available: false}
];

test('ascending first', () => {
  const ui = mount(<BookSorter items={BOOKS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Rebecca","Ulysses","Persuasion","Matilda","Kindred","Clean Code"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<BookSorter items={BOOKS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Clean Code","Kindred","Matilda","Persuasion","Ulysses","Rebecca"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(BOOKS);
  const ui = mount(<BookSorter items={BOOKS} />);
  ui.click('button');
  expect(JSON.stringify(BOOKS)).toBe(before);
});
