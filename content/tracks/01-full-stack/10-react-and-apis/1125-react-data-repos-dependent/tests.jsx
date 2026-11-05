const REPOS = [
  {id: 1, name: "cli", stars: 1079, openIssues: 95, language: "TypeScript", archived: false},
  {id: 2, name: "analytics", stars: 1211, openIssues: 92, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 689, openIssues: 34, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 1536, openIssues: 138, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 4128, openIssues: 115, language: "TypeScript", archived: false}
];
const GROUPS = ['first', 'rest'];
const loadItems = vi.fn(async (g) => (g === 'first' ? REPOS.slice(0, 1) : REPOS.slice(1)));

test('loads groups then items', async () => {
  const ui = mount(<RepoBrowser loadGroups={async () => GROUPS} loadItems={loadItems} />);
  await waitFor(() => expect(ui.findAll('button').map(text)).toEqual(GROUPS));
  expect(ui.text()).toContain('Pick a group');
  ui.click(ui.getByText('rest'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["analytics","auth-service","docs","design-system"]));
  expect(loadItems).toHaveBeenCalledWith('rest');
});
