function sumUntilNegative(numbers) {
  let total = 0;
  for (const n of numbers) {
    if (n < 0) break;
    total += n;
  }
  return total;
}

function sumSkippingNulls(values) {
  let total = 0;
  for (const v of values) {
    if (v === null || v === undefined) continue;
    total += v;
  }
  return total;
}

function firstDuplicate(items) {
  const seen = new Set();
  for (const item of items) {
    if (seen.has(item)) return item;
    seen.add(item);
  }
  return undefined;
}
