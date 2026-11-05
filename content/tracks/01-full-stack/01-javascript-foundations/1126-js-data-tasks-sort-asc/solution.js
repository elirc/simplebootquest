export function tasksByEstimate(tasks) {
  return [...tasks].sort((a, b) => a.estimate - b.estimate).map((x) => x.title);
}
