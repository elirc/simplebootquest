const REPOS = [
  {id: 1, name: "api-gateway", stars: 2309, openIssues: 42, language: "TypeScript", archived: false},
  {id: 2, name: "auth-service", stars: 2530, openIssues: 66, language: "Go", archived: true},
  {id: 3, name: "search", stars: 3875, openIssues: 125, language: "TypeScript", archived: false},
  {id: 4, name: "infra", stars: 853, openIssues: 40, language: "Python", archived: false},
  {id: 5, name: "design-system", stars: 4953, openIssues: 128, language: "Python", archived: true},
  {id: 6, name: "docs", stars: 262, openIssues: 64, language: "TypeScript", archived: true}
];

test('one tab per language', () => {
  const ui = mount(<RepoTabs items={REPOS} />);
  expect(ui.findAll('button').map(text)).toEqual(["TypeScript","Go","Python"]);
  expect(ui.findAll('button').map((b) => b.props['aria-selected'])).toEqual([true,false,false]);
  expect(ui.findAll('li').map(text)).toEqual(["api-gateway","search","docs"]);
});

test('switching tabs', () => {
  const ui = mount(<RepoTabs items={REPOS} />);
  ui.click(ui.findAll('button')[2]);
  expect(ui.findAll('li').map(text)).toEqual(["infra","design-system"]);
});
