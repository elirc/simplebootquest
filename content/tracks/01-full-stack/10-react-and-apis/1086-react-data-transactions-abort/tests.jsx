const TRANSACTIONS = [
  {id: 1, reference: "TX-09", amount: -53, day: 23, category: "salary"},
  {id: 2, reference: "TX-02", amount: 1021, day: 24, category: "salary"},
  {id: 3, reference: "TX-10", amount: 785, day: 14, category: "rent"},
  {id: 4, reference: "TX-04", amount: 813, day: 23, category: "food"},
  {id: 5, reference: "TX-03", amount: 657, day: 23, category: "salary"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(TRANSACTIONS.filter((x) => x.reference.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveTransactionSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "tx");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["TX-09","TX-02","TX-10","TX-04","TX-03"]));
  expect(signals[1].aborted).toBe(true);
});
