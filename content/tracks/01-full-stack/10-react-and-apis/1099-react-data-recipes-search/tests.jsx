const RECIPES = [
  {id: 1, name: "Pho", minutes: 74, calories: 702, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 86, calories: 718, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Gyoza", minutes: 30, calories: 922, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 44, calories: 902, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 31, calories: 503, cuisine: "italian", difficulty: "medium", vegetarian: true}
];
const search = vi.fn(async (q) => RECIPES.filter((x) => x.name.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<RecipeSearch search={search} />);
  ui.type('input', '  ph ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('1 results'));
  expect(ui.findAll('li').map(text)).toEqual(["Pho"]);
  expect(search).toHaveBeenCalledWith('ph');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<RecipeSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<RecipeSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
