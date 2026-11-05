const REPOS = [
  {id: 1, name: "cli", stars: 1079, openIssues: 95, language: "TypeScript", archived: false},
  {id: 2, name: "analytics", stars: 1211, openIssues: 92, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 689, openIssues: 34, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 1536, openIssues: 138, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 4128, openIssues: 115, language: "TypeScript", archived: false}
];
const loadPage = vi.fn(async (page) => ({ items: REPOS.slice((page - 1) * 2, page * 2), hasMore: page * 2 < REPOS.length }));

test('loads pages and appends', async () => {
  const ui = mount(<RepoFeed loadPage={loadPage} />);
  await waitFor(() => expect(ui.findAll('li').length).toBe(2));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(4));
  ui.click(ui.getByText('Load more'));
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["cli","analytics","auth-service","docs","design-system"]));
  expect(ui.find('button')).toBeUndefined();
});
