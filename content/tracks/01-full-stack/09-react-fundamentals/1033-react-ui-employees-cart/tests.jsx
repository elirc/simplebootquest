const EMPLOYEES = [
  {id: 1, name: "Katherine", salary: 59085, yearsAtCompany: 3, team: "data", level: "junior", remote: false},
  {id: 2, name: "Frances", salary: 68614, yearsAtCompany: 1, team: "data", level: "mid", remote: false},
  {id: 3, name: "Ken", salary: 67404, yearsAtCompany: 1, team: "data", level: "mid", remote: true},
  {id: 4, name: "Barbara", salary: 123309, yearsAtCompany: 12, team: "product", level: "senior", remote: true},
  {id: 5, name: "Ada", salary: 47230, yearsAtCompany: 3, team: "data", level: "senior", remote: false},
  {id: 6, name: "Grace", salary: 139252, yearsAtCompany: 13, team: "data", level: "mid", remote: false}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={EMPLOYEES} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={EMPLOYEES} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 7');
});

test('never below zero', () => {
  const ui = mount(<Cart items={EMPLOYEES} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
