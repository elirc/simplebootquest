const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -53, day: 23, category: "salary"},
  {id: 2, reference: "TX-02", amount: 1021, day: 24, category: "salary"},
  {id: 3, reference: "TX-10", amount: 785, day: 14, category: "rent"},
  {id: 4, reference: "TX-04", amount: 813, day: 23, category: "food"},
  {id: 5, reference: "TX-03", amount: 657, day: 23, category: "salary"}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<TransactionManager initial={TRANSACTIONS} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["TX-09","TX-10","TX-04","TX-03"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<TransactionManager initial={TRANSACTIONS} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["TX-09","TX-02","TX-10","TX-04","TX-03"]);
});
