const INITIAL = [{"id":1,"title":"Data Viz","done":false},{"id":2,"title":"Node APIs","done":false},{"id":3,"title":"React Basics","done":false}];

test('reducer: add, toggle, clearDone without mutating', () => {
  const s0 = Object.freeze(INITIAL.map((x) => Object.freeze({ ...x })));
  const s1 = coursesReducer(s0, { type: 'add', title: 'New' });
  expect(s1[3]).toEqual({ id: 4, title: 'New', done: false });
  const s2 = coursesReducer(s1, { type: 'toggle', id: 2 });
  expect(s2.map((x) => x.done)).toEqual([false, true, false, false]);
  expect(coursesReducer(s2, { type: 'clearDone' }).map((x) => x.id)).toEqual([1, 3, 4]);
  expect(coursesReducer(s0, { type: 'nope' })).toBe(s0);
});

test('board toggles and clears', () => {
  const ui = mount(<CourseBoard initial={INITIAL} />);
  ui.click(ui.findAll('li')[0]);
  expect(ui.findAll('li').map((li) => li.props['aria-checked'])).toEqual([true, false, false]);
  ui.click(ui.getByText('Clear done'));
  expect(ui.findAll('li').map(text)).toEqual(["Node APIs","React Basics"]);
});
