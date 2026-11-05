const INITIAL = [{"id":1,"label":"Tue run","done":false},{"id":2,"label":"Mon lift","done":false},{"id":3,"label":"Thu ride","done":false}];

test('reducer: add, toggle, clearDone without mutating', () => {
  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));
  const s1 = workoutsReducer(s0, { type: 'add', label: 'New' });
  expect(s1[3]).toEqual({ id: 4, label: 'New', done: false });
  const s2 = workoutsReducer(s1, { type: 'toggle', id: 2 });
  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);
  expect(workoutsReducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);
  expect(workoutsReducer(s0, { type: 'nope' })).toBe(s0);
});

test('board toggles and clears', () => {
  const ui = mount(<WorkoutBoard initial={INITIAL} />);
  ui.click(ui.findAll('li')[0]);
  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);
  ui.click(ui.getByText('Clear done'));
  expect(ui.findAll('li').map(text)).toEqual(["Mon lift","Thu ride"]);
});
