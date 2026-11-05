export function lowestPriority(tasks) {
  let best = null;
  for (const x of tasks) if (best === null || x.priority < best.priority) best = x;
  return best ? best.title : null;
}
