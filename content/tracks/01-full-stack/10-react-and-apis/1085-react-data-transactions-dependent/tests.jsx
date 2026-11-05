const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -53, day: 23, category: "salary"},
  {id: 2, reference: "TX-02", amount: 1021, day: 24, category: "salary"},
  {id: 3, reference: "TX-10", amount: 785, day: 14, category: "rent"},
  {id: 4, reference: "TX-04", amount: 813, day: 23, category: "food"},
  {id: 5, reference: "TX-03", amount: 657, day: 23, category: "salary"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? TRANSACTIONS.slice(0, 1) : TRANSACTIONS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<TransactionBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["TX-02","TX-10","TX-04","TX-03"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
