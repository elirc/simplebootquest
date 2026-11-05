const ORDERS = [
  {id: 1, code: "A-100", totalCents: 6973, items: 1, status: "pending", country: "UK"},
  {id: 2, code: "E-500", totalCents: 17450, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 2641, items: 5, status: "pending", country: "US"},
  {id: 4, code: "A-102", totalCents: 12378, items: 6, status: "paid", country: "DE"},
  {id: 5, code: "C-301", totalCents: 21271, items: 9, status: "paid", country: "US"}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(ORDERS.filter((x) => x.code.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveOrderSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "a-");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["A-100","A-102"]));
  expect(signals[1].aborted).toBe(true);
});
