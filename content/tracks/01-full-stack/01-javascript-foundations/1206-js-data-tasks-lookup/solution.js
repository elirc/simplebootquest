export function estimateOf(tasks, title) {
  const found = tasks.find((x) => x.title === title);
  return found ? found.estimate : null;
}
