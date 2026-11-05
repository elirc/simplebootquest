const RECIPES = [
  {id: 1, name: "Ramen", minutes: 26, calories: 532, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Lasagne", minutes: 53, calories: 677, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Tacos", minutes: 113, calories: 566, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 116, calories: 276, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Paella", minutes: 98, calories: 213, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Curry", minutes: 48, calories: 872, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test('first page', () => {
  const ui = mount(<RecipePager items={RECIPES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Ramen","Lasagne","Tacos"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<RecipePager items={RECIPES} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Falafel","Paella","Curry"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
