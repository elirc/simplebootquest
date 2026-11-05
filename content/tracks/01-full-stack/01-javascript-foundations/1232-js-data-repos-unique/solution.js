export function distinctLanguages(repos) {
  return [...new Set(repos.map((x) => x.language))].sort();
}
