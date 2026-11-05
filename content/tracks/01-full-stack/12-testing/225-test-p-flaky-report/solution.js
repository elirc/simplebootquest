function analyzeRuns(runs) {
  const stats = new Map();
  for (const run of runs) {
    for (const [name, result] of Object.entries(run)) {
      const s = stats.get(name) ?? { pass: 0, fail: 0 };
      s[result]++;
      stats.set(name, s);
    }
  }
  const out = { flaky: [], broken: [], healthy: [] };
  for (const [name, { pass, fail }] of stats) {
    if (pass > 0 && fail > 0) out.flaky.push(name);
    else if (fail > 0) out.broken.push(name);
    else out.healthy.push(name);
  }
  for (const list of Object.values(out)) list.sort();
  return out;
}
