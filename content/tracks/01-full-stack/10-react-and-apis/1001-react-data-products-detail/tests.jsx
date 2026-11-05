const PRODUCTS = [
  {id: 1, name: "Headphones", price: 38, stock: 13, category: "tech", onSale: false},
  {id: 2, name: "Water Bottle", price: 27, stock: 16, category: "home", onSale: true},
  {id: 3, name: "Plant Pot", price: 10, stock: 17, category: "office", onSale: false},
  {id: 4, name: "Webcam", price: 81, stock: 27, category: "office", onSale: true},
  {id: 5, name: "Desk Lamp", price: 97, stock: 54, category: "office", onSale: false}
];
const byId = (id) => PRODUCTS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<ProductDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Water Bottle"));
  expect(ui.text()).toContain("stock: 16");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<ProductDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<ProductDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Plant Pot"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<ProductDetail id={1} load={load} />);
  ui.rerender(<ProductDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("Webcam"));
});
