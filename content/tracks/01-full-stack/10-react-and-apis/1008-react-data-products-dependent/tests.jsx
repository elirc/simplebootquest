const PRODUCTS = [
  {id: 1, name: "Headphones", price: 38, stock: 13, category: "tech", onSale: false},
  {id: 2, name: "Water Bottle", price: 27, stock: 16, category: "home", onSale: true},
  {id: 3, name: "Plant Pot", price: 10, stock: 17, category: "office", onSale: false},
  {id: 4, name: "Webcam", price: 81, stock: 27, category: "office", onSale: true},
  {id: 5, name: "Desk Lamp", price: 97, stock: 54, category: "office", onSale: false}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? PRODUCTS.slice(0, 1) : PRODUCTS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<ProductBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Water Bottle","Plant Pot","Webcam","Desk Lamp"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
