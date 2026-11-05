const INITIAL = [{"id":1,"name":"Cityloft","done":false},{"id":2,"name":"Pine Lodge","done":false},{"id":3,"name":"Harbour View","done":false}];

test('reducer: add, toggle, clearDone without mutating', () => {
  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));
  const s1 = hotelsReducer(s0, { type: 'add', name: 'New' });
  expect(s1[3]).toEqual({ id: 4, name: 'New', done: false });
  const s2 = hotelsReducer(s1, { type: 'toggle', id: 2 });
  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);
  expect(hotelsReducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);
  expect(hotelsReducer(s0, { type: 'nope' })).toBe(s0);
});

test('board toggles and clears', () => {
  const ui = mount(<HotelBoard initial={INITIAL} />);
  ui.click(ui.findAll('li')[0]);
  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);
  ui.click(ui.getByText('Clear done'));
  expect(ui.findAll('li').map(text)).toEqual(["Pine Lodge","Harbour View"]);
});
