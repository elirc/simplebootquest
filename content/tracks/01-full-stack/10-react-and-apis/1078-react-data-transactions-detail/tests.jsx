const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -53, day: 23, category: "salary"},
  {id: 2, reference: "TX-02", amount: 1021, day: 24, category: "salary"},
  {id: 3, reference: "TX-10", amount: 785, day: 14, category: "rent"},
  {id: 4, reference: "TX-04", amount: 813, day: 23, category: "food"},
  {id: 5, reference: "TX-03", amount: 657, day: 23, category: "salary"}
];
const byId = (id) => TRANSACTIONS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<TransactionDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("TX-02"));
  expect(ui.text()).toContain("day of the month: 24");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<TransactionDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<TransactionDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("TX-10"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<TransactionDetail id={1} load={load} />);
  ui.rerender(<TransactionDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("TX-04"));
});
