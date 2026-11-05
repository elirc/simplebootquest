const ORDERS = [
  {id: 1, code: "A-100", totalCents: 6973, items: 1, status: "pending", country: "UK"},
  {id: 2, code: "E-500", totalCents: 17450, items: 5, status: "shipped", country: "DE"},
  {id: 3, code: "B-201", totalCents: 2641, items: 5, status: "pending", country: "US"},
  {id: 4, code: "A-102", totalCents: 12378, items: 6, status: "paid", country: "DE"},
  {id: 5, code: "C-301", totalCents: 21271, items: 9, status: "paid", country: "US"}
];
const search = vi.fn(async (q) => ORDERS.filter((x) => x.code.toLowerCase().includes(q.toLowerCase())));

test('searches on submit', async () => {
  const ui = mount(<OrderSearch search={search} />);
  ui.type('input', '  a- ');
  await ui.act(async () => ui.submit('form'));
  await waitFor(() => expect(ui.text()).toContain('2 results'));
  expect(ui.findAll('li').map(text)).toEqual(["A-100","A-102"]);
  expect(search).toHaveBeenCalledWith('a-');
});

test('ignores blank queries', () => {
  const spy = vi.fn(async () => []);
  const ui = mount(<OrderSearch search={spy} />);
  ui.type('input', '   ');
  ui.submit('form');
  expect(spy).not.toHaveBeenCalled();
});

test('disables the button while searching', async () => {
  let finish;
  const slow = () => new Promise((r) => (finish = r));
  const ui = mount(<OrderSearch search={slow} />);
  ui.type('input', 'x');
  ui.submit('form');
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(true));
  finish([]);
  await waitFor(() => expect(ui.find('button').props.disabled).toBe(false));
});
