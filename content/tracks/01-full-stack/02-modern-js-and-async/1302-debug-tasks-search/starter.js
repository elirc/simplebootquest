export function searchTasks(tasks, query) {
  const q = query.trim();
  return tasks.filter((x) => x.title.toLowerCase().includes(q)).map((x) => x.title);
}
