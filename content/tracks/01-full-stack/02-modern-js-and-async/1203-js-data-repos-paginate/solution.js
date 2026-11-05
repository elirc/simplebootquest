export function pageOfRepos(repos, page, size) {
  const totalPages = Math.ceil(repos.length / size);
  const items = repos.slice((page - 1) * size, page * size).map((x) => x.name);
  return { items, page, totalPages };
}
