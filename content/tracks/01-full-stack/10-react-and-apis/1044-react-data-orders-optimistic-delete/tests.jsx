const ORDERS = [
  {id: 1, code: "A-100", totalCents: 6973, items: 1, status: "pending", country: "UK"},
  {id: 2, code: "E-500", totalCents: 17450, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 2641, items: 5, status: "pending", country: "US"},
  {id: 4, code: "A-102", totalCents: 12378, items: 6, status: "paid", country: "DE"},
  {id: 5, code: "C-301", totalCents: 21271, items: 9, status: "paid", country: "US"}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<OrderManager initial={ORDERS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["A-100","B-201","A-102","C-301"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<OrderManager initial={ORDERS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["A-100","E-500","B-201","A-102","C-301"]);
});
