const REPOS = [
  {id: 1, name: "api-gateway", stars: 2309, openIssues: 42, language: "TypeScript", archived: false},
  {id: 2, name: "auth-service", stars: 2530, openIssues: 66, language: "Go", archived: true},
  {id: 3, name: "search", stars: 3875, openIssues: 125, language: "TypeScript", archived: false},
  {id: 4, name: "infra", stars: 853, openIssues: 40, language: "Python", archived: false},
  {id: 5, name: "design-system", stars: 4953, openIssues: 128, language: "Python", archived: true},
  {id: 6, name: "docs", stars: 262, openIssues: 64, language: "TypeScript", archived: true}
];

test('shows everything at first', () => {
  const ui = mount(<RepoFilter items={REPOS} />);
  expect(ui.findAll('li').length).toBe(6);
});

test('filters case-insensitively', () => {
  const ui = mount(<RepoFilter items={REPOS} />);
  ui.type('input', "AU");
  expect(ui.findAll('li').map(text)).toEqual(["auth-service"]);
});

test('empty state', () => {
  const ui = mount(<RepoFilter items={REPOS} />);
  ui.type('input', 'zzzz');
  expect(ui.find('ul')).toBeUndefined();
  expect(ui.text()).toContain('No matches');
});
