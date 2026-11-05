const PRODUCTS = [
  {id: 1, name: "Headphones", price: 38, stock: 13, category: "tech", onSale: false},
  {id: 2, name: "Water Bottle", price: 27, stock: 16, category: "home", onSale: true},
  {id: 3, name: "Plant Pot", price: 10, stock: 17, category: "office", onSale: false},
  {id: 4, name: "Webcam", price: 81, stock: 27, category: "office", onSale: true},
  {id: 5, name: "Desk Lamp", price: 97, stock: 54, category: "office", onSale: false}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(PRODUCTS.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveProductSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "he");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Headphones"]));
  expect(signals[1].aborted).toBe(true);
});
