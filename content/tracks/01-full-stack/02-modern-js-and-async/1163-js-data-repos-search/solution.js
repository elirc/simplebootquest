export function searchRepos(repos, query) {
  const q = query.trim().toLowerCase();
  return repos.filter((x) => x.name.toLowerCase().includes(q)).map((x) => x.name);
}
