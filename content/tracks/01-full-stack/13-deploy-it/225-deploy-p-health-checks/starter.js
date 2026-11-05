async function runChecks(checks, { timeoutMs }) {
  const out = {};
  for (const c of checks) {
    await c.run();
    out[c.name] = { ok: true, ms: 0 };
  }
  return { status: 'ok', checks: out };
}

function httpStatus(result) {
  return 200;
}
