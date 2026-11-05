const REPOS = [
  {id: 1, name: "api-gateway", stars: 2309, openIssues: 42, language: "TypeScript", archived: false},
  {id: 2, name: "auth-service", stars: 2530, openIssues: 66, language: "Go", archived: true},
  {id: 3, name: "search", stars: 3875, openIssues: 125, language: "TypeScript", archived: false},
  {id: 4, name: "infra", stars: 853, openIssues: 40, language: "Python", archived: false},
  {id: 5, name: "design-system", stars: 4953, openIssues: 128, language: "Python", archived: true},
  {id: 6, name: "docs", stars: 262, openIssues: 64, language: "TypeScript", archived: true}
];

test('starts hidden', () => {
  const ui = mount(<RepoToggle items={REPOS} />);
  expect(ui.find('ul')).toBeUndefined();
  expect(text(ui.find('button'))).toBe('Show repos');
});

test('shows and hides', () => {
  const ui = mount(<RepoToggle items={REPOS} />);
  ui.click('button');
  expect(ui.findAll('li').map(text)).toEqual(["api-gateway","auth-service","search","infra","design-system","docs"]);
  expect(text(ui.find('button'))).toBe('Hide repos');
  ui.click('button');
  expect(ui.find('ul')).toBeUndefined();
});
