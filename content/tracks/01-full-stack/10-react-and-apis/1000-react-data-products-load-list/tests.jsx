const PRODUCTS = [
  {id: 1, name: "Headphones", price: 38, stock: 13, category: "tech", onSale: false},
  {id: 2, name: "Water Bottle", price: 27, stock: 16, category: "home", onSale: true},
  {id: 3, name: "Plant Pot", price: 10, stock: 17, category: "office", onSale: false},
  {id: 4, name: "Webcam", price: 81, stock: 27, category: "office", onSale: true},
  {id: 5, name: "Desk Lamp", price: 97, stock: 54, category: "office", onSale: false}
];

test('loading then data', async () => {
  const load = vi.fn(async () => PRODUCTS);
  const ui = mount(<ProductList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Headphones","Water Bottle","Plant Pot","Webcam","Desk Lamp"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return PRODUCTS;
  });
  const ui = mount(<ProductList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
