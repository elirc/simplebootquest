const BOOKS = [
  {id: 1, title: "Ulysses", pages: 256, year: 1851, genre: "tech", available: false},
  {id: 2, title: "Matilda", pages: 527, year: 1906, genre: "sci-fi", available: false},
  {id: 3, title: "Clean Code", pages: 665, year: 1846, genre: "tech", available: true},
  {id: 4, title: "Rebecca", pages: 181, year: 1980, genre: "tech", available: false},
  {id: 5, title: "Persuasion", pages: 348, year: 1975, genre: "classic", available: true},
  {id: 6, title: "Kindred", pages: 629, year: 1988, genre: "sci-fi", available: false}
];

test('first page', () => {
  const ui = mount(<BookPager items={BOOKS} />);
  expect(ui.findAll('li').map(text)).toEqual(["Ulysses","Matilda","Clean Code"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<BookPager items={BOOKS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Rebecca","Persuasion","Kindred"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
