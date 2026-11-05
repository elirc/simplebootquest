const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -53, day: 23, category: "salary"},
  {id: 2, reference: "TX-02", amount: 1021, day: 24, category: "salary"},
  {id: 3, reference: "TX-10", amount: 785, day: 14, category: "rent"},
  {id: 4, reference: "TX-04", amount: 813, day: 23, category: "food"},
  {id: 5, reference: "TX-03", amount: 657, day: 23, category: "salary"}
];
const search = vi.fn(async (q) => TRANSACTIONS.filter((x) => x.reference.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<TransactionSearch search={search} />);
  ui.type('input', '  tx ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('5 results'));
  expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-10","TX-04","TX-03"]);
  expect(search).toHaveBeenCalledWith('tx');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<TransactionSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<TransactionSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
