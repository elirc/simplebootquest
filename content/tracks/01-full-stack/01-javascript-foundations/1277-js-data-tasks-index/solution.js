export function tasksById(tasks) {
  const byId = {};
  for (const x of tasks) byId[x.id] = x.title;
  return byId;
}
