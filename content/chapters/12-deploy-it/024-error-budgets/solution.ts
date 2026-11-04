const round = (n: number, d: number) => Math.round(n * 10 ** d) / 10 ** d;

export function downtimeAllowed(slo: number, days: number): number {
  return round(days * 24 * 60 * ((100 - slo) / 100), 1);
}

export function budgetReport(slo: number, total: number, failed: number) {
  const allowedFailures = total * ((100 - slo) / 100);
  return {
    availability: round(total ? ((total - failed) / total) * 100 : 100, 3),
    budgetUsed: round(allowedFailures ? failed / allowedFailures : 0, 2),
    // Round first: 1_000_000 * 0.001 is 999.9999... in floating point.
    remaining: Math.max(0, Math.floor(round(allowedFailures - failed, 6))),
  };
}

export function burnRate(slo: number, windowTotal: number, windowFailed: number): number {
  if (windowTotal === 0) return 0;
  return round(windowFailed / windowTotal / ((100 - slo) / 100), 1);
}
