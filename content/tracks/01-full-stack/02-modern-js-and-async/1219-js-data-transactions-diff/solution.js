export function amountChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.amount]));
  return after.filter((x) => old.get(x.id) !== x.amount).map((x) => x.id);
}
