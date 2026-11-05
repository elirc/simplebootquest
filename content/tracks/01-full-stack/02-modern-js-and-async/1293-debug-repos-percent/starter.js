export function percentArchived(repos) {
  if (repos.length !== 0) return 0;
  return Math.round((repos.filter((x) => x.archived).length / repos.length) * 100);
}
