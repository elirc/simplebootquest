const REPOS = [
  {id: 1, name: "api-gateway", stars: 2309, openIssues: 42, language: "TypeScript", archived: false},
  {id: 2, name: "auth-service", stars: 2530, openIssues: 66, language: "Go", archived: true},
  {id: 3, name: "search", stars: 3875, openIssues: 125, language: "TypeScript", archived: false},
  {id: 4, name: "infra", stars: 853, openIssues: 40, language: "Python", archived: false},
  {id: 5, name: "design-system", stars: 4953, openIssues: 128, language: "Python", archived: true},
  {id: 6, name: "docs", stars: 262, openIssues: 64, language: "TypeScript", archived: true}
];
const plus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[1]);
const minus = (ui, i) => ui.click(ui.findAll('li')[i].children.filter((c) => c.type === 'button')[0]);

test('starts empty', () => {
  const ui = mount(<Cart items={REPOS} />);
  expect(text(ui.find('p'))).toBe('Total: 0');
});

test('adds up quantities', () => {
  const ui = mount(<Cart items={REPOS} />);
  plus(ui, 0);
  plus(ui, 0);
  plus(ui, 1);
  expect(text(ui.find('p'))).toBe('Total: 150');
});

test('never below zero', () => {
  const ui = mount(<Cart items={REPOS} />);
  minus(ui, 2);
  expect(text(ui.findAll('span')[2])).toBe('0');
  expect(text(ui.find('p'))).toBe('Total: 0');
});
