export function summariseRepos(repos) {
  return repos.map(({ id, name, stars }) => ({ id, name, stars }));
}
