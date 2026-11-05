const INITIAL = [{"id":1,"subject":"Feature idea","done":false},{"id":2,"subject":"Dark mode","done":false},{"id":3,"subject":"Refund request","done":false}];

test('reducer: add, toggle, clearDone without mutating', () => {
  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));
  const s1 = ticketsReducer(s0, { type: 'add', subject: 'New' });
  expect(s1[3]).toEqual({ id: 4, subject: 'New', done: false });
  const s2 = ticketsReducer(s1, { type: 'toggle', id: 2 });
  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);
  expect(ticketsReducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);
  expect(ticketsReducer(s0, { type: 'nope' })).toBe(s0);
});

test('board toggles and clears', () => {
  const ui = mount(<TicketBoard initial={INITIAL} />);
  ui.click(ui.findAll('li')[0]);
  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);
  ui.click(ui.getByText('Clear done'));
  expect(ui.findAll('li').map(text)).toEqual(["Dark mode","Refund request"]);
});
