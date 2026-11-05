const RECIPES = [
  {id: 1, name: "Pho", minutes: 74, calories: 702, cuisine: "italian", difficulty: "easy", vegetarian: true},
  {id: 2, name: "Risotto", minutes: 86, calories: 718, cuisine: "mexican", difficulty: "medium", vegetarian: true},
  {id: 3, name: "Gyoza", minutes: 30, calories: 922, cuisine: "mexican", difficulty: "hard", vegetarian: false},
  {id: 4, name: "Lasagne", minutes: 44, calories: 902, cuisine: "asian", difficulty: "medium", vegetarian: false},
  {id: 5, name: "Ramen", minutes: 31, calories: 503, cuisine: "italian", difficulty: "medium", vegetarian: true}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(RECIPES.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveRecipeSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "ph");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Pho"]));
  expect(signals[1].aborted).toBe(true);
});
