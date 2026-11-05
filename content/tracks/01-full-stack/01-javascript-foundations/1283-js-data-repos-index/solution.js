export function reposById(repos) {
  const byId = {};
  for (const x of repos) byId[x.id] = x.name;
  return byId;
}
