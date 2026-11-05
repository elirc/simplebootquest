const REPOS = [
  {id: 1, name: "cli", stars: 1079, openIssues: 95, language: "TypeScript", archived: false},
  {id: 2, name: "analytics", stars: 1211, openIssues: 92, language: "Python", archived: true},
  {id: 3, name: "auth-service", stars: 689, openIssues: 34, language: "TypeScript", archived: false},
  {id: 4, name: "docs", stars: 1536, openIssues: 138, language: "TypeScript", archived: true},
  {id: 5, name: "design-system", stars: 4128, openIssues: 115, language: "TypeScript", archived: false}
];

test('only the latest results win', async () => {
  const signals = [];
  const search = (q, signal) => {
    signals.push(signal);
    const delay = q === 'a' ? 40 : 2;
    return new Promise((r) => setTimeout(() => r(REPOS.filter((x) => x.name.toLowerCase().includes(q))), delay));
  };
  const ui = mount(<LiveRepoSearch search={search} />);
  ui.type('input', 'a');
  ui.type('input', "cl");
  await sleep(80);
  await waitFor(() => expect(ui.findAll('li').map(text)).toEqual(["cli"]));
  expect(signals[1].aborted).toBe(true);
});
