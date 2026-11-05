export function splitTasksByBlocked(tasks) {
  const yes = [];
  const no = [];
  for (const x of tasks) (x.blocked ? yes : no).push(x.title);
  return { yes, no };
}
