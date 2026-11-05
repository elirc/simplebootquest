const PRODUCTS = [
  {id: 1, name: "Headphones", price: 38, stock: 13, category: "tech", onSale: false},
  {id: 2, name: "Water Bottle", price: 27, stock: 16, category: "home", onSale: true},
  {id: 3, name: "Plant Pot", price: 10, stock: 17, category: "office", onSale: false},
  {id: 4, name: "Webcam", price: 81, stock: 27, category: "office", onSale: true},
  {id: 5, name: "Desk Lamp", price: 97, stock: 54, category: "office", onSale: false}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<ProductManager initial={PRODUCTS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Headphones","Plant Pot","Webcam","Desk Lamp"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<ProductManager initial={PRODUCTS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Headphones","Water Bottle","Plant Pot","Webcam","Desk Lamp"]);
});
