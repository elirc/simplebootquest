const STUDENTS = [
  {id: 1, name: "Chen", score: 48, age: 29, course: "web", graduated: true},
  {id: 2, name: "Amara", score: 87, age: 34, course: "data", graduated: true},
  {id: 3, name: "Bilal", score: 94, age: 17, course: "data", graduated: true},
  {id: 4, name: "Luca", score: 58, age: 25, course: "data", graduated: true},
  {id: 5, name: "Dara", score: 80, age: 17, course: "design", graduated: false}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? STUDENTS.slice(0, 1) : STUDENTS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<StudentBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Amara","Bilal","Luca","Dara"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
