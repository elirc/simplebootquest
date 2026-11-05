const RECIPES = [
  {id: 1, name: "Pho", minutes: 74, calories: 702, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 86, calories: 718, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Gyoza", minutes: 30, calories: 922, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 44, calories: 902, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 31, calories: 503, cuisine: "italian", difficulty: "medium", vegetarian: true}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<RecipeManager initial={RECIPES} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Pho","Gyoza","Lasagne","Ramen"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<RecipeManager initial={RECIPES} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Pho","Risotto","Gyoza","Lasagne","Ramen"]);
});
