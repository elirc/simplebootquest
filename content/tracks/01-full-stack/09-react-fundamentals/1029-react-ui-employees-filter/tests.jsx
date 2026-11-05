const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 59085, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 68614, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 3, name: "Ken", salary: 67404, yearsAtCompany: 1, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 123309, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 5, name: "Ada", salary: 47230, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 6, name: "Grace", salary: 139252, yearsAtCompany: 13, team: "data", level: "mid", remote: false}
];

test('shows everything at first', () => {
  const ui = mount(<EmployeeFilter items={EMPLOYEES} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<EmployeeFilter items={EMPLOYEES} />);
  ui.type('input', "FR");
  expect(ui.findAll('li').map(text)).toEqual(["Frances"]);
});

test('empty state', () => {
  const ui = mount(<EmployeeFilter items={EMPLOYEES} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
