const REPOS = [
  {id: 1, name: "cli", stars: 1079, openIssues: 95, language: "TypeScript", archived: false},
  {id: 2, name: "analytics", stars: 1211, openIssues: 92, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 689, openIssues: 34, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 1536, openIssues: 138, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 4128, openIssues: 115, language: "TypeScript", archived: false}
];

test('loading then data', async () => {
  const load = vi.fn(async () => REPOS);
  const ui = mount(<RepoList load={load} />);
  expect(ui.text()).toBe('Loading…');
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["cli","analytics","auth-service","docs","design-system"]));
  expect(load).toHaveBeenCalledTimes(1);
});

test('error and retry', async () => {
  let fail = true;
  const load = vi.fn(async () => {
    if (fail) throw new Error('500');
    return REPOS;
  });
  const ui = mount(<RepoList load={load} />);
  await waitFor(() => expect(ui.text()).toContain('Something went wrong'));
  fail = false;
  ui.click(ui.getByText('Retry'));
  await waitFor(() => expect(ui.findAll('li').length).toBe(5));
  expect(load).toHaveBeenCalledTimes(2);
});
