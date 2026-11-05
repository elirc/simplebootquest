const ORDERS = [
  {id: 1, code: "A-100", totalCents: 6973, items: 1, status: "pending", country: "UK"},
  {id: 2, code: "E-500", totalCents: 17450, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 2641, items: 5, status: "pending", country: "US"},
  {id: 4, code: "A-102", totalCents: 12378, items: 6, status: "paid", country: "DE"},
  {id: 5, code: "C-301", totalCents: 21271, items: 9, status: "paid", country: "US"}
];
const byId = (id) => ORDERS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<OrderDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("E-500"));
  expect(ui.text()).toContain("total (in cents): 17450");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<OrderDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<OrderDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("B-201"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<OrderDetail id={1} load={load} />);
  ui.rerender(<OrderDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("A-102"));
});
