export function countReposPerLanguage(repos) {
  const counts = {};
  for (const x of repos) counts[x.language] = (counts[x.language] ?? 0) + 1;
  return counts;
}
