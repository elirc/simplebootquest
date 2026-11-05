const ORDERS = [
  {id: 1, code: "D-401", totalCents: 1668, items: 8, status: "shipped", country: "UK"},
  {id: 2, code: "C-300", totalCents: 14405, items: 7, status: "shipped", country: "DE"},
  {id: 3, code: "A-100", totalCents: 13253, items: 2, status: "paid", country: "DE"},
  {id: 4, code: "D-400", totalCents: 14009, items: 9, status: "shipped", country: "US"},
  {id: 5, code: "E-501", totalCents: 5636, items: 9, status: "pending", country: "US"},
  {id: 6, code: "B-201", totalCents: 9691, items: 6, status: "paid", country: "US"}
];

test('first page', () => {
  const ui = mount(<OrderPager items={ORDERS} />);
  expect(ui.findAll('li').map(text)).toEqual(["D-401","C-300","A-100"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 2');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<OrderPager items={ORDERS} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 2;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["D-400","E-501","B-201"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
