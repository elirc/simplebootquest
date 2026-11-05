const RECIPES = [
  {id: 1, name: "Ramen", minutes: 26, calories: 532, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Lasagne", minutes: 53, calories: 677, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Tacos", minutes: 113, calories: 566, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 116, calories: 276, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Paella", minutes: 98, calories: 213, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Curry", minutes: 48, calories: 872, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test('starts hidden', () => {
  const ui = mount(<RecipeToggle items={RECIPES} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show recipes');
});

test('shows and hides', () => {
  const ui = mount(<RecipeToggle items={RECIPES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Ramen","Lasagne","Tacos","Falafel","Paella","Curry"]);
  expect(text(ui.find('button'))).toBe('Hide recipes');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
