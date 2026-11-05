const ORDERS = [
  {id: 1, code: "A-100", totalCents: 6973, items: 1, status: "pending", country: "UK"},
  {id: 2, code: "E-500", totalCents: 17450, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 2641, items: 5, status: "pending", country: "US"},
  {id: 4, code: "A-102", totalCents: 12378, items: 6, status: "paid", country: "DE"},
  {id: 5, code: "C-301", totalCents: 21271, items: 9, status: "paid", country: "US"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? ORDERS.slice(0, 1) : ORDERS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<OrderBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["E-500","B-201","A-102","C-301"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
