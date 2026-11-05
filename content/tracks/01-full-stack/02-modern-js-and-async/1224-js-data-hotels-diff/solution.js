export function nightlyPriceChanges(before, after) {
  const old = new Map(before.map((x) => [x.id, x.nightlyPrice]));
  return after.filter((x) => old.get(x.id) !== x.nightlyPrice).map((x) => x.id);
}
