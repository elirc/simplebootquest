const PRODUCTS = [
  {id: 1, name: "Headphones", price: 38, stock: 13, category: "tech", onSale: false},
  {id: 2, name: "Water Bottle", price: 27, stock: 16, category: "home", onSale: true},
  {id: 3, name: "Plant Pot", price: 10, stock: 17, category: "office", onSale: false},
  {id: 4, name: "Webcam", price: 81, stock: 27, category: "office", onSale: true},
  {id: 5, name: "Desk Lamp", price: 97, stock: 54, category: "office", onSale: false}
];
const loadPage = vi.fn(async (page) => ({ items: PRODUCTS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < PRODUCTS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<ProductFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Headphones","Water Bottle","Plant Pot","Webcam","Desk Lamp"]));
  expect(ui.find('button')).toBeUndefined();
});
