const BOOKS = [
  {id: 1, title: "Ulysses", pages: 256, year: 1851, genre: "tech", available: false},
  {id: 2, title: "Matilda", pages: 527, year: 1906, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 665, year: 1846, genre: "tech", available: true},
  {id: 4, title: "Rebecca", pages: 181, year: 1980, genre: "tech", available: false},
  {id: 5, title: "Persuasion", pages: 348, year: 1975, genre: "classic", available: true},
  {id: 6, title: "Kindred", pages: 629, year: 1988, genre: "sci-fi", available: false}
];

test('shows everything at first', () => {
  const ui = mount(<BookFilter items={BOOKS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<BookFilter items={BOOKS} />);
  ui.type('input', "MA");
  expect(ui.findAll('li').map(text)).toEqual(["Matilda"]);
});

test('empty state', () => {
  const ui = mount(<BookFilter items={BOOKS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
