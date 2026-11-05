const INITIAL = [{"id":1,"reference":"TX-09","done":false},{"id":2,"reference":"TX-02","done":false},{"id":3,"reference":"TX-06","done":false}];

test('reducer: add, toggle, clearDone without mutating', () => {
  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));
  const s1 = transactionsReducer(s0, { type: 'add', reference: 'New' });
  expect(s1[3]).toEqual({ id: 4, reference: 'New', done: false });
  const s2 = transactionsReducer(s1, { type: 'toggle', id: 2 });
  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);
  expect(transactionsReducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);
  expect(transactionsReducer(s0, { type: 'nope' })).toBe(s0);
});

test('board toggles and clears', () => {
  const ui = mount(<TransactionBoard initial={INITIAL} />);
  ui.click(ui.findAll('li')[0]);
  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);
  ui.click(ui.getByText('Clear done'));
  expect(ui.findAll('li').map(text)).toEqual(["TX-02","TX-06"]);
});
