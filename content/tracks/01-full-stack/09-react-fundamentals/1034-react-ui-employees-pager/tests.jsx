const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 59085, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 68614, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 3, name: "Ken", salary: 67404, yearsAtCompany: 1, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 123309, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 5, name: "Ada", salary: 47230, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 6, name: "Grace", salary: 139252, yearsAtCompany: 13, team: "data", level: "mid", remote: false}
];

test('first page', () => {
  const ui = mount(<EmployeePager items={EMPLOYEES} />);
  expect(ui.findAll('li').map(text)).toEqual(["Katherine","Frances"]);
  expect(text(ui.find('p'))).toBe('Page 1 of 3');
  expect(ui.getByText('Previous').props.disabled).toBe(true);
});

test('next and last page', () => {
  const ui = mount(<EmployeePager items={EMPLOYEES} />);
  for (let i = 0; i < 10; i++) ui.click(ui.getByText('Next'));
  const last = 3;
  expect(text(ui.find('p'))).toBe(`Page ${last} of ${last}`);
  expect(ui.findAll('li').map(text)).toEqual(["Ada","Grace"]);
  expect(ui.getByText('Next').props.disabled).toBe(true);
});
