const EMPLOYEES = [
  {id: 1, name: "Frances", salary: 47148, yearsAtCompany: 4, team: "product", level: "junior", remote: false},
  {id: 2, name: "Dennis", salary: 116139, yearsAtCompany: 10, team: "product", level: "junior", remote: true},
  {id: 3, name: "Radia", salary: 96335, yearsAtCompany: 13, team: "product", level: "mid", remote: true},
  {id: 4, name: "Alan", salary: 134299, yearsAtCompany: 1, team: "data", level: "junior", remote: true},
  {id: 5, name: "Ken", salary: 100275, yearsAtCompany: 11, team: "platform", level: "junior", remote: true}
];
const names = (ui) => ui.findAll('li').map((li) => text(li).replace('Delete', ''));
const del = (ui, i) => ui.click(ui.findAll('li')[i].children.find((c) => c.type === 'button'));

test('removes immediately', async () => {
  let finish;
  const ui = mount(<EmployeeManager initial={EMPLOYEES} remove={() => new Promise((r) => (finish = r))} />);
  del(ui, 1);
  expect(names(ui)).toEqual(["Frances","Radia","Alan","Ken"]);
  finish();
});

test('rolls back on failure', async () => {
  const ui = mount(<EmployeeManager initial={EMPLOYEES} remove={async () => { throw new Error('500'); }} />);
  del(ui, 2);
  await waitFor(() => expect(ui.text()).toContain('Could not delete'));
  expect(names(ui)).toEqual(["Frances","Dennis","Radia","Alan","Ken"]);
});
