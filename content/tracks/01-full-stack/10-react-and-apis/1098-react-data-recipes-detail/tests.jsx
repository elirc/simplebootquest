const RECIPES = [
  {id: 1, name: "Pho", minutes: 74, calories: 702, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 86, calories: 718, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Gyoza", minutes: 30, calories: 922, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 44, calories: 902, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 31, calories: 503, cuisine: "italian", difficulty: "medium", vegetarian: true}
];
const byId = (id) => RECIPES.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<RecipeDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Risotto"));
  expect(ui.text()).toContain("calories: 718");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<RecipeDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<RecipeDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Gyoza"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<RecipeDetail id={1} load={load} />);
  ui.rerender(<RecipeDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Lasagne"));
});
