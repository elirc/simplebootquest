const RECIPES = [
  {id: 1, name: "Pho", minutes: 74, calories: 702, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 86, calories: 718, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Gyoza", minutes: 30, calories: 922, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 44, calories: 902, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 31, calories: 503, cuisine: "italian", difficulty: "medium", vegetarian: true}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? RECIPES.slice(0, 1) : RECIPES.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<RecipeBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Risotto","Gyoza","Lasagne","Ramen"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
