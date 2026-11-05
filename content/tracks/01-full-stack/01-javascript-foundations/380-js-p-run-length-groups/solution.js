function groupConsecutive(array) {
  const out = [];
  for (const v of array) {
    const last = out[out.length - 1];
    if (last && last[0] === v) last.push(v);
    else out.push([v]);
  }
  return out;
}

function longestStreak(days) {
  const unique = [...new Set(days)];
  let best = 0;
  let run = 0;
  let prev = null;
  for (const day of unique) {
    const t = Date.parse(`${day}T00:00:00Z`);
    run = prev !== null && t - prev === 86400000 ? run + 1 : 1;
    best = Math.max(best, run);
    prev = t;
  }
  return best;
}
