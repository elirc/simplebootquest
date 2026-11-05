export function countReposByLanguage(repos, value) {
  let count = 0;
  for (const x of repos) if (x.language === value) count++;
  return count;
}
