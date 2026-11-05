const INITIAL = [{"id":1,"number":"QF1","done":false},{"id":2,"number":"TK1","done":false},{"id":3,"number":"IB6251","done":false}];

test('reducer: add, toggle, clearDone without mutating', () => {
  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));
  const s1 = flightsReducer(s0, { type: 'add', number: 'New' });
  expect(s1[3]).toEqual({ id: 4, number: 'New', done: false });
  const s2 = flightsReducer(s1, { type: 'toggle', id: 2 });
  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);
  expect(flightsReducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);
  expect(flightsReducer(s0, { type: 'nope' })).toBe(s0);
});

test('board toggles and clears', () => {
  const ui = mount(<FlightBoard initial={INITIAL} />);
  ui.click(ui.findAll('li')[0]);
  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);
  ui.click(ui.getByText('Clear done'));
  expect(ui.findAll('li').map(text)).toEqual(["TK1","IB6251"]);
});
