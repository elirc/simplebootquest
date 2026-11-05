const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 59085, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 68614, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 3, name: "Ken", salary: 67404, yearsAtCompany: 1, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 123309, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 5, name: "Ada", salary: 47230, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 6, name: "Grace", salary: 139252, yearsAtCompany: 13, team: "data", level: "mid", remote: false}
];

test('ascending first', () => {
  const ui = mount(<EmployeeSorter items={EMPLOYEES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Frances","Ken","Katherine","Ada","Barbara","Grace"]);
  expect(text(ui.find('button'))).toBe('Sort descending');
});

test('toggles', () => {
  const ui = mount(<EmployeeSorter items={EMPLOYEES} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["Grace","Barbara","Katherine","Ada","Frances","Ken"]);
  expect(text(ui.find('button'))).toBe('Sort ascending');
});

test('does not mutate props', () => {
  const before = JSON.stringify(EMPLOYEES);
  const ui = mount(<EmployeeSorter items={EMPLOYEES} />);
  ui.click('button');
  expect(JSON.stringify(EMPLOYEES)).toBe(before);
});
