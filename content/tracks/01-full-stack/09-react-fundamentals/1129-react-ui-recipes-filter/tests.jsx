const RECIPES = [
  {id: 1, name: "Ramen", minutes: 26, calories: 532, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Lasagne", minutes: 53, calories: 677, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Tacos", minutes: 113, calories: 566, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 116, calories: 276, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Paella", minutes: 98, calories: 213, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Curry", minutes: 48, calories: 872, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test('shows everything at first', () => {
  const ui = mount(<RecipeFilter items={RECIPES} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<RecipeFilter items={RECIPES} />);
  ui.type('input', "LA");
  expect(ui.findAll('li').map(text)).toEqual(["Lasagne","Falafel","Paella"]);
});

test('empty state', () => {
  const ui = mount(<RecipeFilter items={RECIPES} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
