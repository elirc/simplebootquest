const REPOS = [
  {id: 1, name: "cli", stars: 1079, openIssues: 95, language: "TypeScript", archived: false},
  {id: 2, name: "analytics", stars: 1211, openIssues: 92, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 689, openIssues: 34, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 1536, openIssues: 138, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 4128, openIssues: 115, language: "TypeScript", archived: false}
];
const byId = (id) => REPOS.find((x) => x.id === id);

test('loads by id', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<RepoDetail id={2} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("analytics"));
  expect(ui.text()).toContain("open issues: 92");
});

test('reloads when the id changes', async () => {
  const load = vi.fn(async (id) => byId(id));
  const ui = mount(<RepoDetail id={1} load={load} />);
  await waitFor(() => expect(ui.find('h2')).toBeDefined());
  ui.rerender(<RepoDetail id={3} load={load} />);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("auth-service"));
  expect(load).toHaveBeenCalledWith(3);
});

test('ignores a slow response for an old id', async () => {
  const load = (id) => new Promise((r) => setTimeout(() => r(byId(id)), id === 1 ? 30 : 1));
  const ui = mount(<RepoDetail id={1} load={load} />);
  ui.rerender(<RepoDetail id={4} load={load} />);
  await sleep(60);
  await waitFor(() => expect(text(ui.find('h2'))).toBe("docs"));
});
