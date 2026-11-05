const WORKOUTS = [
  {id: 1, label: "Tue swim", minutes: 16, calories: 742, kind: "mobility"},
  {id: 2, label: "Thu yoga", minutes: 115, calories: 728, kind: "cardio"},
  {id: 3, label: "Sat ride", minutes: 41, calories: 854, kind: "cardio"},
  {id: 4, label: "Wed lift", minutes: 94, calories: 448, kind: "mobility"},
  {id: 5, label: "Fri run", minutes: 24, calories: 443, kind: "cardio"}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? WORKOUTS.slice(0, 1) : WORKOUTS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<WorkoutBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Thu yoga","Sat ride","Wed lift","Fri run"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
