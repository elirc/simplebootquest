const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 47148, yearsAtCompany: 4, team: "product", level: "junior", remote: false},
  {id: 2, name: "Dennis", salary: 116139, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 96335, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 4, name: "Alan", salary: 134299, yearsAtCompany: 1, team: "data", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 100275, yearsAtCompany: 11, team: "platform", level: "junior", remote: true}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? EMPLOYEES.slice(0, 1) : EMPLOYEES.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<EmployeeBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["Dennis","Radia","Alan","Ken"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
