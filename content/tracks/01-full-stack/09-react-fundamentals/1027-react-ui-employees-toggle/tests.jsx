const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 59085, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 68614, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 3, name: "Ken", salary: 67404, yearsAtCompany: 1, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 123309, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 5, name: "Ada", salary: 47230, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 6, name: "Grace", salary: 139252, yearsAtCompany: 13, team: "data", level: "mid", remote: false}
];

test('starts hidden', () => {
  const ui = mount(<EmployeeToggle items={EMPLOYEES} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show employees');
});

test('shows and hides', () => {
  const ui = mount(<EmployeeToggle items={EMPLOYEES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Katherine","Frances","Ken","Barbara","Ada","Grace"]);
  expect(text(ui.find('button'))).toBe('Hide employees');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
