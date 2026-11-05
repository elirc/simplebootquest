const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -53, day: 23, category: "salary"},
  {id: 2, reference: "TX-02", amount: 1021, day: 24, category: "salary"},
  {id: 3, reference: "TX-10", amount: 785, day: 14, category: "rent"},
  {id: 4, reference: "TX-04", amount: 813, day: 23, category: "food"},
  {id: 5, reference: "TX-03", amount: 657, day: 23, category: "salary"}
];
const loadPage = vi.fn(async (page) => ({ items: TRANSACTIONS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < TRANSACTIONS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<TransactionFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-10","TX-04","TX-03"]));
  expect(ui.find('button')).toBeUndefined();
});
