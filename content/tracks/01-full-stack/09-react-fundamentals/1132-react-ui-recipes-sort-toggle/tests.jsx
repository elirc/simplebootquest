const RECIPES = [
  {id: 1, name: "Ramen", minutes: 26, calories: 532, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Lasagne", minutes: 53, calories: 677, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Tacos", minutes: 113, calories: 566, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 116, calories: 276, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Paella", minutes: 98, calories: 213, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Curry", minutes: 48, calories: 872, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test('ascending first', () => {
  const ui = mount(<RecipeSorter items={RECIPES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Paella","Falafel","Ramen","Tacos","Lasagne","Curry"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<RecipeSorter items={RECIPES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Curry","Lasagne","Tacos","Ramen","Falafel","Paella"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(RECIPES);
  const ui = mount(<RecipeSorter items={RECIPES} />);
  ui.click('button');
  expect(JSON.stringify(RECIPES)).toBe(before);
});
