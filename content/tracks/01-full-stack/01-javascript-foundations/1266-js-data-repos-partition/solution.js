export function splitReposByArchived(repos) {
  const yes = [];
  const no = [];
  for (const x of repos) (x.archived ? yes : no).push(x.name);
  return { yes, no };
}
