export function pageOfTasks(tasks, page, size) {
  const totalPages = Math.ceil(tasks.length / size);
  const items = tasks.slice((page - 1) * size, page * size).map((x) => x.title);
  return { items, page, totalPages };
}
