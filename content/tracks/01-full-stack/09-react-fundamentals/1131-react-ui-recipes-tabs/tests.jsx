const RECIPES = [
  {id: 1, name: "Ramen", minutes: 26, calories: 532, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 2, name: "Lasagne", minutes: 53, calories: 677, cuisine: "middle-eastern", difficulty: "easy", vegetarian: true},
  {id: 3, name: "Tacos", minutes: 113, calories: 566, cuisine: "mexican", difficulty: "easy", vegetarian: false},
  {id: 4, name: "Falafel", minutes: 116, calories: 276, cuisine: "mexican", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Paella", minutes: 98, calories: 213, cuisine: "asian", difficulty: "hard", vegetarian: true},
  {id: 6, name: "Curry", minutes: 48, calories: 872, cuisine: "italian", difficulty: "hard", vegetarian: true}
];

test('one tab per cuisine', () => {
  const ui = mount(<RecipeTabs items={RECIPES} />);
  expect(ui.findAll('button').map(text)).toEqual(["asian","middle-eastern","mexican","italian"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["Ramen","Paella"]);
});

test('switching tabs', () => {
  const ui = mount(<RecipeTabs items={RECIPES} />);
  ui.click(ui.findAll('button')[3]);
  expect(ui.findAll('li').map(text)).toEqual(["Curry"]);
});
