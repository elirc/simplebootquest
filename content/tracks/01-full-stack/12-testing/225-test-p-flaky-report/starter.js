function analyzeRuns(runs) {
  return { flaky: [], broken: [], healthy: Object.keys(runs[0] ?? {}) };
}
